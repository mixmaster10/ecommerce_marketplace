import React, { Component } from 'react';

import FooterDefault from '../../components/shared/footers/FooterDefault';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import Newletters from '../../components/partials/commons/Newletters';
import CustomerBought from '../../components/partials/product/CustomerBought';
import RelatedProduct from '../../components/partials/product/RelatedProduct';
import BreadCrumb from '../../components/elements/BreadCrumb';
import ProductWidgets from '../../components/partials/product/ProductWidgets';
import ProductDetailOnSale from '../../components/elements/detail/ProductDetailOnSale';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import { getCollections } from '../../store/collection/action';
import { getProductsById } from '../../store/product/action';
import { connect } from 'react-redux';

class ProductOnSalePage extends Component {
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
                text: 'Health & Beauty',
                url: '/shop',
            },
            {
                text: 'Equipments',
                url: '/shop',
            },
            {
                text: 'Baxter Care Hair Kit For Bearded Mens',
            },
        ];
        return (
            <div className="layout--product">
                <HeaderDefault />
                <HeaderMobile />
                <NavigationList />
                <BreadCrumb breacrumb={breadCrumb} />
                <div className="ps-page--product">
                    <div className="ps-container">
                        <div className="ps-page__container">
                            <div className="ps-page__left">
                                <ProductDetailOnSale />
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

export default connect()(ProductOnSalePage);
