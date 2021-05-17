import React, { Component } from 'react';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import FooterMarketPlace2 from '../../components/shared/footers/FooterMarketPlace2';
import NavigationList from '../../components/shared/navigation/NavigationList';
import MarketPlace3ProductBox from '../../components/partials/homepage/marketplace3/MarketPlace3ProductBox';
import MartketPlace3Banner from '../../components/partials/homepage/marketplace3/MartketPlace3Banner';
import MarketPlace3DealOfDay from '../../components/partials/homepage/marketplace3/MarketPlace3DealOfDay';
import MarketPlace3SearchTrending from '../../components/partials/homepage/marketplace3/MarketPlace3SearchTrending';
import HeaderMarketPlace3 from '../../components/shared/headers/HeaderMarketPlace3';
import SubscribePopup from '../../components/shared/SubscribePopup';
import '../../scss/market-place-3.scss';
import { connect } from 'react-redux';
import { getCategories, getCollections } from '../../store/collection/action';

class HomeMarketPlace3Page extends Component {
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
                <HeaderMarketPlace3 />
                <HeaderMobile />
                <NavigationList />
                <SubscribePopup active={subscribe} />
                <main id="homepage-5">
                    <MartketPlace3Banner />
                    <MarketPlace3SearchTrending />
                    <MarketPlace3DealOfDay collectionSlug="deal_of_the_day"/>
                    <MarketPlace3ProductBox />
                </main>
                <FooterMarketPlace2 />
            </div>
        );
    }
}

export default connect()(HomeMarketPlace3Page);
