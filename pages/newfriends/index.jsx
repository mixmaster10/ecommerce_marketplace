import React from 'react';
import AlexHeader from '../../components/shared/headers/AlexHeader';
import LeftSidebar from '../../components/shared/left-sidebar/LeftSidebar';
import FriendsHero from './FriendsHero';
import SuggestedFriends from './SuggestedFriends';
import AllFriends from './AllFriends';

const NewFriends = (props) => {
    return (
        <div>
         <AlexHeader />
        <div className="stores-wrapper">
            <div className="white-space"></div>
            <LeftSidebar />
           <div className="stores-main-wrapper">
                <FriendsHero />
                <SuggestedFriends />
                <AllFriends />
           </div>
           <div className="white-space"></div>
        </div>
        </div>
    );
};


export default NewFriends;
