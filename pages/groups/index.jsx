import React from 'react';
import Groups from '../../components/bluejestic/groups/Groups';
import AlexHeader from '../../components/shared/headers/AlexHeader';
import NavigationList from '../../components/shared/navigation/NavigationList';

function GroupsPage() {
    return (
        <>
            <AlexHeader />
            {/* <HeaderMobile /> */}
            <NavigationList />
            <Groups />
        </>
    );
}

export default GroupsPage;
