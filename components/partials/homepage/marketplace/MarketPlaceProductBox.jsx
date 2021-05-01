import React, { Component } from 'react';
import MarketClothingsAndApparel from './modules/MarketClothingsAndApparel';
import MarketComputerAndTechnology from './modules/MarketComputerAndTechnology';
import MarketConsumerElectronics from './modules/MarketConsumerElectronics';
import MarketGardenAndKitchen from './modules/MarketGardenAndKitchen';
import MarketHeathyAndBeauty from './modules/MarketHeathyAndBeauty';

class MarketPlaceProductBox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ps-section--gray">
                <div className="container">
                    <MarketClothingsAndApparel collectionSlug="clothing-and-parel" />
                    <MarketConsumerElectronics collectionSlug="consumer-electrics" />
                    <MarketComputerAndTechnology collectionSlug="computers-and-technologies" />
                    <MarketGardenAndKitchen collectionSlug="garden-and-kitchen" />
                    <MarketHeathyAndBeauty collectionSlug="health-and-beauty" />
                </div>
            </div>
        );
    }
}

export default MarketPlaceProductBox;
