import React, { Component } from 'react';

import FooterDefault from '../../components/shared/footers/FooterDefault';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import Newletters from '../../components/partials/commons/Newletters';
import CustomerBought from '../../components/partials/product/CustomerBought';
import RelatedProduct from '../../components/partials/product/RelatedProduct';
import BreadCrumb from '../../components/elements/BreadCrumb';
import ProductWidgets from '../../components/partials/product/ProductWidgets';
import ProductDetailGroupped from '../../components/elements/detail/ProductDetailGroupped';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import { connect } from 'react-redux';
import { getCollections } from '../../store/collection/action';
import { getProductsById } from '../../store/product/action';

class ProductGrouppedPage extends Component {
    constructor(props) {
        super(props);
    }
    static async getInitialProps(ctx) {
        return { query: ctx.query };
    }

    componentDidMount() {
        const { query } = this.props;
        const pid = '3';
        if (query) {
            const collectionsParams = [
                'customer_bought',
                'shop-recommend-items',
                'widget_same_brand',
            ];
            this.props.dispatch(getCollections(collectionsParams));
        }
        this.props.dispatch(getProductsById(pid));
    }
    render() {
        const breadCrumb = [
            {
                text: 'Home',
                url: '/',
            },
            {
                text: 'Consumer Electrics',
                url: '/shop',
            },
            {
                text: 'Refrigerators',
                url: '/shop',
            },
            {
                text: 'Home Theater System',
                url: '/shop',
            },
            {
                text: 'Edifier Powered Bookshelf Speakers',
            },
        ];
        return (
            <div className="layout--product">
                <HeaderDefault />
                <HeaderMobile />
                <NavigationList />
                <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
                <div className="ps-page--product">
                    <div className="ps-container">
                        <div className="ps-page__container">
                            <div className="ps-page__left">
                                <ProductDetailGroupped />
                            </div>
                            <div className="ps-page__right">
                                <ProductWidgets collectionSlug="widget_same_brand" />
                            </div>
                        </div>
                        <CustomerBought collectionSlug="customer_bought" />
                        <RelatedProduct collectionSlug="shop-recommend-items" />
                    </div>
                </div>
                <Newletters />
                <FooterDefault />
            </div>
        );
    }
}
export default connect()(ProductGrouppedPage);
