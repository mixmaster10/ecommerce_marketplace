import React from 'react';

import Market2ConsumerElectronics from './modules/Market2ConsumerElectronics';
import Market2Clothing from './modules/Market2Clothing';
import Market2ComputerAndTechnology from './modules/Market2ComputerAndTechnology';
import Market2GardenAndKitchen from './modules/Market2GardenAndKitchen';
import Market2HealthyAndBeauty from './modules/Market2HealthyAndBeauty';

const MarketPlace2ProductBox = () => (
    <div>
        <Market2ConsumerElectronics collectionSlug="consumer-electrics" />
        <Market2Clothing collectionSlug="clothing-and-parel" />
        <Market2ComputerAndTechnology  collectionSlug="computers-and-technologies"/>
        <Market2GardenAndKitchen  collectionSlug="garden-and-kitchen"/>
        <Market2HealthyAndBeauty collectionSlug="health-and-beauty" />
    </div>
);

export default MarketPlace2ProductBox;
