import React from 'react';
import AlexHeader from '../../components/shared/headers/AlexHeader';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import Wall from '../../components/bluejestic/seller-wall/Wall';
import BasicWidget from '../../components/shared/widgets/BasicWidget';
import Aside from '../../components/bluejestic/groups/Aside';
import Misc from '../../components/bluejestic/seller-wall/Misc';
import LoggedInCard from '../../components/shared/widgets/LoggedInCard';

// import BasicWidget from '../../shared/widgets/BasicWidget'

function index() {
    return (
        <>
            <AlexHeader />
            {/* <HeaderMobile /> */}
            <NavigationList />
            <div className="_page-container">
                <Aside ratings={3} />

                <Wall />

                <Misc />
            </div>
        </>
    );
}

export default index;
