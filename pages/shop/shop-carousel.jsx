import React, { Component } from 'react';
import { connect } from 'react-redux';

import FooterDefault from '../../components/shared/footers/FooterDefault';
import Newletters from '../../components/partials/commons/Newletters';
import BreadCrumb from '../../components/elements/BreadCrumb';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import ShopCarouselBanner from '../../components/partials/shop/ShopCarouselBanner';
import ShopCarouselTopDeal from '../../components/partials/shop/ShopCarouselTopDeal';
import ShopCarouselProductBox from '../../components/partials/shop/ShopCarouselProductBox';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import { getCollections } from '../../store/collection/action';
class ShopCategoriesPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const collectionsSlug = [
            'shop_top_deal_super_hot_today',
            'best_seller_products',
            'new_arrivals_products',
        ];
        this.props.dispatch(getCollections(collectionsSlug));
    }

    render() {
        const breadCrumb = [
            {
                text: 'Home',
                url: '/',
            },
            {
                text: 'Shop Carousel',
            },
        ];
        return (
            <div className="site-content">
                <HeaderDefault />
                <HeaderMobile />
                <NavigationList />
                <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
                <div className="ps-page--shop" id="shop-carousel">
                    <div className="container">
                        <ShopCarouselBanner />
                        <ShopCarouselTopDeal collectionSlug="shop_top_deal_super_hot_today" />
                        <ShopCarouselProductBox />
                    </div>
                </div>
                <Newletters />
                <FooterDefault />
            </div>
        );
    }
}

export default connect()(ShopCategoriesPage);
