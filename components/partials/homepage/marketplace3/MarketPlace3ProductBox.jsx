import React from 'react';
import MarketPlace3Promotions from './MarketPlace3Promotions';
import Market3ConsumerElectronics from './modules/Market3ConsumerElectronics';
import Market3Clothing from './modules/Market3Clothing';
import Market3GardenAndKitchen from './modules/Market3GardenAndKitchen';

const MarketPlace3ProductBox = () => (
    <div className="ps-product-box">
        <div className="container">
            <MarketPlace3Promotions />
            <Market3ConsumerElectronics collectionSlug="consumer-electrics"/>
            <Market3Clothing collectionSlug="clothing-and-parel" />
            <Market3GardenAndKitchen collectionSlug="garden-and-kitchen" />
        </div>
    </div>
);

export default MarketPlace3ProductBox;
