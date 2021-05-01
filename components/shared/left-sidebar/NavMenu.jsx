import React from 'react';


const NavMenu = (props) => {
    return (
        <div className="left-sidebar-navigation-wrapper">
            <ul>
                <li>
                    <a href="#">
                        <span className="nav-icon">
                            <img src="/static/img/left-sidebar/my-profile.png" />
                        </span>
                        <span className="nav-text">
                            My Profile
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="nav-icon">
                            <img src="/static/img/left-sidebar/feed.png" />
                        </span>
                        <span className="nav-text">
                            Feed
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="nav-icon">
                            <img src="/static/img/left-sidebar/stores.png" />
                        </span>
                        <span className="nav-text">
                            Stores
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="nav-icon">
                            <img src="/static/img/left-sidebar/friends.png" />
                        </span>
                        <span className="nav-text">
                            Friends
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="nav-icon">
                            <img src="/static/img/left-sidebar/groups.png" />
                        </span>
                        <span className="nav-text">
                            Groups
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="nav-icon">
                            <img src="/static/img/left-sidebar/favourites.png" />
                        </span>
                        <span className="nav-text">
                            Favourites
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="nav-icon">
                            <img src="/static/img/left-sidebar/notifications.png" />
                        </span>
                        <span className="nav-text">
                            Notifications
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="nav-icon">
                            <img src="/static/img/left-sidebar/messaging.png" />
                        </span>
                        <span className="nav-text">
                            Messaging
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    );
};


export default NavMenu;
