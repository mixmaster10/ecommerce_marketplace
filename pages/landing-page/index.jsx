import React from 'react';
import LandingPageCommunity from './LandingPageCommunity';
import LandingPageDiscover from './LandingPageDiscover';
import LandingPageFeatures from './LandingPageFeatures';
import LandingPageFooter from './LandingPageFooter';
import LandingPageHeader from './LandingPageHeader';
import LandingPageHero from './LandingPageHero';

const LandingPage = (props) => {

    return (
        <div className="landing-main-wrapper">
            <div className="hero-section">
                <LandingPageHeader />
                <LandingPageHero />
            </div>
            <LandingPageFeatures />
            <LandingPageDiscover />
            <LandingPageFooter />
        </div>
    );
};


export default LandingPage;
