import React, { Component } from 'react';
import { connect } from 'react-redux';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import Newsletters from '../../components/partials/commons/Newletters';
import MarketPlaceProductBox from '../../components/partials/homepage/marketplace/MarketPlaceProductBox';
import MarketPlacePromotion from '../../components/partials/homepage/marketplace/MarketPlacePromotions';
import MarketPlaceDealOfDay from '../../components/partials/homepage/marketplace/MarketPlaceDealOfDay';
import MarketPlaceSiteFeatures from '../../components/partials/homepage/marketplace/MarketPlaceSiteFeatures';
import MarketPlaceHomeBanner from '../../components/partials/homepage/marketplace/MartketPlaceHomeBanner';
import MarketPlacePromotionHeader from '../../components/partials/homepage/marketplace/MarketPlacePromotionHeader';
import HeaderMarketPlace from '../../components/shared/headers/HeaderMarketPlace';
import SubscribePopup from '../../components/shared/SubscribePopup';
import '../../scss/market-place-1.scss';
import { getCategories, getCollections } from '../../store/collection/action';

class HomeMarketPlacePage extends Component {
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
                <MarketPlacePromotionHeader />
                <HeaderMarketPlace />
                <HeaderMobile />
                <NavigationList />
                <SubscribePopup active={subscribe} />
                <main id="homepage-3">
                    <MarketPlaceHomeBanner />
                    <MarketPlaceSiteFeatures />
                    <MarketPlacePromotion />
                    <MarketPlaceDealOfDay collectionSlug="deal_of_the_day" />
                    <MarketPlaceProductBox />
                    <Newsletters />
                </main>
                <FooterDefault />
            </div>
        );
    }
}
export default connect()(HomeMarketPlacePage);
