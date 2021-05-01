import React, { Component } from 'react';
import { connect } from 'react-redux';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import Newletters from '../../components/partials/commons/Newletters';
import BreadCrumb from '../../components/elements/BreadCrumb';
import LayoutShopSidebar from '../../components/partials/shop/LayoutShopSidebar';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import ShopWidget from '../../components/partials/shop/modules/ShopWidget';
import { getProducts, getTotalProducts } from '../../store/product/action';
import { getCollections } from '../../store/collection/action';

class ShopSidebarWithoutBannerPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const params = {
            _start: 1,
            _limit: 12,
        };

        const collectionsSlug = [
            'shop_best_sale_items',
            'shop-recommend-items',
        ];
        this.props.dispatch(getProducts(params));
        this.props.dispatch(getTotalProducts());
        this.props.dispatch(getCollections(collectionsSlug));
    }

    render() {
        const breadCrumb = [
            {
                text: 'Home',
                url: '/',
            },
            {
                text: 'Shop Sidebar',
            },
        ];
        return (
            <div className="site-content">
                <HeaderDefault />
                <HeaderMobile />
                <NavigationList />
                <BreadCrumb breacrumb={breadCrumb} />
                <div className="ps-page--shop" id="shop-sidebar">
                    <div className="container">
                        <div className="ps-layout--shop">
                            <ShopWidget />
                            <div className="ps-layout__right">
                                <LayoutShopSidebar />
                            </div>
                        </div>
                    </div>
                </div>
                <Newletters layout="container" />
                <FooterDefault />
            </div>
        );
    }
}

export default connect(state => state.product)(ShopSidebarWithoutBannerPage);
