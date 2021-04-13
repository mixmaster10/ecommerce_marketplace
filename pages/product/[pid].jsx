import React from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import Newletters from '../../components/partials/commons/Newletters';
import CustomerBought from '../../components/partials/product/CustomerBought';
import ProductDetailFullwidth from '../../components/elements/detail/ProductDetailFullwidth';
import ProductWidgets from '../../components/partials/product/ProductWidgets';
import NavigationList from '../../components/shared/navigation/NavigationList';
import BreadCrumb from '../../components/elements/BreadCrumb';
import HeaderMobileProduct from '../../components/shared/header-mobile/HeaderMobileProduct';
import { getProductsById } from '../../store/product/action';
import HeaderProduct from '../../components/shared/headers/HeaderProduct';
import { getCollections } from '../../store/collection/action';
import RelatedProduct from '../../components/partials/product/RelatedProduct';

class ProductDefaultPage extends React.Component {
    constructor(props) {
        super(props);
    }

    static async getInitialProps(ctx) {
        return { query: ctx.query };
    }
    componentDidMount() {
        const { pid } = this.props.query;
        const { query } = this.props;
        if (isNaN(pid)) {
            Router.push('/page/page-404');
        }

        if (query) {
            const collectionsParams = [
                'customer_bought',
                'shop-recommend-items',
                'widget_same_brand',
            ];
            this.props.dispatch(getProductsById(pid));
            this.props.dispatch(getCollections(collectionsParams));
        }
        Router.events.on('routeChangeStart', (url) => {
            const nextPid = url.split('/').pop();
            if (nextPid !== '' && isNaN(parseInt(nextPid)) === false) {
                this.props.dispatch(getProductsById(nextPid));
            }
        });
    }

    render() {
        const { singleProduct } = this.props;
        const breadCrumb = [
            {
                text: 'Home',
                url: '/',
            },
            {
                text: 'Shop',
                url: '/shop',
            },
            {
                text: singleProduct ? singleProduct.title : '',
            },
        ];

        return (
            <div className="layout--product">
                {singleProduct ? (
                    <HeaderProduct productData={singleProduct} />
                ) : (
                    ''
                )}
                <HeaderMobileProduct />
                <NavigationList />
                <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
                <div className="ps-page--product">
                    <div className="ps-container">
                        <div className="ps-page__container">
                            <div className="ps-page__left">
                                <ProductDetailFullwidth />
                            </div>
                            <div className="ps-page__right">
                                <ProductWidgets collectionSlug="widget_same_brand" />
                            </div>
                        </div>
                        <CustomerBought
                            layout="fullwidth"
                            collectionSlug="customer_bought"
                        />
                        <RelatedProduct
                            layout="fullwidth"
                            collectionSlug="shop-recommend-items"
                        />
                    </div>
                </div>
                <Newletters />
                <FooterDefault />
            </div>
        );
    }
}

export default connect((state) => state.product)(ProductDefaultPage);
