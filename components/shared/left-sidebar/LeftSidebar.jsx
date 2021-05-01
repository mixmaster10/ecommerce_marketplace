import React from 'react';
import CoverPhoto from './CoverPhoto';
import NavMenu from './NavMenu';
import RecentPost from './RecentPost';

const LeftSidebar = (props) => {

    return (
        <div className="stores-left-sidebar">
            <div className="left-sidebar-wrapper">
                <CoverPhoto />
                <NavMenu />
                <RecentPost />
            </div>
        </div>
    );
};


export default LeftSidebar;
