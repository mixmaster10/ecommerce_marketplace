import React, {Component}from 'react';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import MarketPlace2Download from '../../components/partials/homepage/marketplace2/MarketPlace2Download';
import MartketPlace2Banner from '../../components/partials/homepage/marketplace2/MartketPlace2Banner';
import MarketPlace2ProductBox from '../../components/partials/homepage/marketplace2/MarketPlace2ProductBox';
import MarketPlace2Categories from '../../components/partials/homepage/marketplace2/MarketPlace2Categories';
import MarketPlace2Promotions from '../../components/partials/homepage/marketplace2/MarketPlace2Promotions';
import HeaderMarketPlace2 from '../../components/shared/headers/HeaderMarketPlace2';
import FooterMarketPlace2 from '../../components/shared/footers/FooterMarketPlace2';
import SubscribePopup from '../../components/shared/SubscribePopup';
import '../../scss/market-place-2.scss';
import { getCategories, getCollections } from '../../store/collection/action';
import { connect } from 'react-redux';

class HomeMarketPlace2Page extends Component{
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
                <HeaderMarketPlace2 />
                <HeaderMobile />
                <NavigationList />
                <SubscribePopup active={subscribe} />
                <main id="homepage-4">
                    <MartketPlace2Banner />
                    <MarketPlace2Categories />
                    <MarketPlace2Promotions />
                    <MarketPlace2ProductBox />
                    <MarketPlace2Download />
                </main>
                <FooterMarketPlace2 />
            </div>
        );
    }

}

export default connect()(HomeMarketPlace2Page);
