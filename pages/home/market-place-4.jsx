import React, { Component } from 'react';

import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import MartketPlace4Banner from '../../components/partials/homepage/marketplace4/MartketPlace4Banner';
import MartketPlace4SiteFeatures from '../../components/partials/homepage/marketplace4/MartketPlace4SiteFeatures';
import MartketPlace4Promotions from '../../components/partials/homepage/marketplace4/MartketPlace4Promotions';
import MartketPlace4Dealhot from '../../components/partials/homepage/marketplace4/MartketPlace4Dealhot';
import MartketPlace4TopCategories from '../../components/partials/homepage/marketplace4/MartketPlace4TopCategories';
import MartketPlace4CategoriesBox from '../../components/partials/homepage/marketplace4/MartketPlace4CategoriesBox';
import HeaderMarketPlace4 from '../../components/shared/headers/HeaderMarketPlace4';
import FooterMarketPlace2 from '../../components/shared/footers/FooterMarketPlace2';
import SubscribePopup from '../../components/shared/SubscribePopup';

import '../../scss/market-place-4.scss';
import { connect } from 'react-redux';
import { getCategories, getCollections } from '../../store/collection/action';
class HomeMarketPlace4Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subscribe: false,
        };
    }
    static async getInitialProps(ctx) {
        return { query: ctx.query };
    }

    componentDidMount() {
        const { query } = this.props;
        if (query) {
            const collectionsSlug = ['deal_of_the_day'];
            const categoriesSlug = [
                'clothing-and-parel',
                'consumer-electrics',
                'computers-and-technologies',
                'garden-and-kitchen',
                'health-and-beauty',
            ];
            this.props.dispatch(getCollections(collectionsSlug));
            this.props.dispatch(getCategories(categoriesSlug));
        }
        setTimeout(() => {
            this.setState({ subscribe: false });
        }, 10000);
    }

    render() {
        const { subscribe } = this.state;
        return (
            <div className="site-content">
                <HeaderMarketPlace4 />
                <HeaderMobile />
                <NavigationList />
                <SubscribePopup active={subscribe} />
                <main id="homepage-6">
                    <MartketPlace4Banner />
                    <MartketPlace4SiteFeatures />
                    <MartketPlace4Promotions />
                    <MartketPlace4Dealhot collectionSlug="deal_of_the_day" />
                    <MartketPlace4TopCategories />
                    <MartketPlace4CategoriesBox />
                </main>
                <FooterMarketPlace2 />
            </div>
        );
    }
}

export default connect()(HomeMarketPlace4Page);
