import Router from 'next/router';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AlexHeader from '../components/shared/headers/AlexHeader';
import NavigationList from '../components/shared/navigation/NavigationList';
import SubscribePopup from '../components/shared/SubscribePopup';
import LandingPage from '../pages/home/bluejestic/LandingPage';
import '../scss/home-default.scss';
import { getCollections } from '../store/collection/action';

// import FooterFullwidth from '../components/shared/footers/FooterFullwidth';
// import HomeBanner from '../components/partials/homepage/home-default/HomeBanner';

class Index extends Component {
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
        const { auth } = this.props;
        if (auth.isLoggedIn) {
            const { query } = this.props;
            if (query) {
                const collectionsSlug = [
                    'deal_of_the_day',
                    'consumer_electronics',
                    'clothings',
                    'garden_and_kitchen',
                    'new_arrivals_products',
                    'fullwidth_consumer_electronic_bestseller',
                    'fullwidth_consumer_electronic_most_popular',
                    'fullwidth_clothing_bestseller',
                    'fullwidth_clothing_most_popular',
                    'fullwidth_kitchen_best_seller',
                    'fullwidth_kitchen_most_popular',
                ];
                this.props.dispatch(getCollections(collectionsSlug));
            }
            setTimeout(() => {
                this.setState({ subscribe: false });
            }, 10000);
        } else {
            Router.push('/landing-page');
        }
    }

    render() {
        const { subscribe } = this.state;
        const { auth } = this.props;
        if (auth.isLoggedIn) {
            return (
                <div className="site-content">
                    <AlexHeader />

                    <NavigationList />
                    <SubscribePopup active={subscribe} />
                    <main id="homepage-1">
                        <LandingPage />
                    </main>
                </div>
            );
        } else return <span></span>;
    }
}

export default connect((state) => state)(Index);
