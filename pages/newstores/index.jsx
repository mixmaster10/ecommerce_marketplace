import React from 'react';
import AlexHeader from '../../components/shared/headers/AlexHeader';
import LeftSidebar from '../../components/shared/left-sidebar/LeftSidebar';
import HeroSlider from './HeroSlider';
import PopularStores from './PopularStores';
import StoreCategories from './StoreCategories';
import SuggestedStores from './SuggestedStores';

const NewStore = (props) => {
    return (
        <div>
         <AlexHeader />
        <div className="stores-wrapper">
            <div className="white-space"></div>
           <div className="stores-left-sidebar">
            <LeftSidebar />
           </div>
           <div className="stores-main-wrapper">
                <HeroSlider />
                <SuggestedStores />
                <StoreCategories />
                <PopularStores />
           </div>
           <div className="white-space"></div>
        </div>
        </div>
    );
};


export default NewStore;
