import React from 'react';

import { connect } from 'react-redux';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import Newletters from '../../components/partials/commons/Newletters';
import LayoutShop from '../../components/partials/shop/LayoutShop';
import BreadCrumb from '../../components/elements/BreadCrumb';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import ShopBrands from '../../components/partials/shop/ShopBrands';
import ShopBanner from '../../components/partials/shop/ShopBanner';
import ShopCategories from '../../components/partials/shop/ShopCategories';
import {
    getProducts,
    getTotalProducts,
    getProductsByCategory,
} from '../../store/product/action';
import { getCollections } from '../../store/collection/action';

class ShopFullwidthPage extends React.Component {
    constructor(props) {
        super(props);
    }

    static async getInitialProps(ctx) {
        return { query: ctx.query };
    }
    componentDidMount() {
        const { query } = this.props;
        if (query.category) {
            this.props.dispatch(getProductsByCategory(query.category));
        } else {
            const params = {
                _start: 1,
                _limit: 12,
            };
            this.props.dispatch(getProducts(params));
            this.props.dispatch(getTotalProducts());
        }

        const collectionsParams = [
            'shop_best_sale_items',
            'shop-recommend-items',
        ];

        this.props.dispatch(getCollections(collectionsParams));
    }

    render() {
        const breadCrumb = [
            {
                text: 'Home',
                url: '/',
            },
            {
                text: 'Shop Default',
            },
        ];
        const { allProducts, totalProducts } = this.props.product;
        return (
            <div className="site-content">
                <HeaderDefault />
                <HeaderMobile />
                <NavigationList />
                <div className="ps-page--shop">
                    <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
                    <div className="ps-container">
                        <ShopBanner />
                        <ShopBrands />
                        <ShopCategories />
                        <LayoutShop
                            products={allProducts}
                            total={totalProducts}
                        />
                    </div>
                </div>
                <Newletters layout="container" />
                <FooterDefault />
            </div>
        );
    }
}
export default connect(state => state)(ShopFullwidthPage);
