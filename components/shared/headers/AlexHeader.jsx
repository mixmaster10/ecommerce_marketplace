import React, { Component } from 'react';
import Link from 'next/link';
import HeaderActions from './modules/HeaderActions';
import AlexHeaderActions from './modules/AlexHeaderActions';
import SearchHeader from './modules/SearchHeader';
import Menu from '../../elements/menu/Menu';
import menuData from '../../../public/static/data/menu';
import BLMMenuBanner from '../../elements/menu/BLMMenuBanner';
import { stickyHeader } from '../../../utilities/common-helpers';

const containerSytle = {
    display: 'flex',
    justifyContent: 'center',
    // backgroundColor: 'purple',
};
const barStyle = {
    width: '100%',
};

function AlexHeader() {
    return (
        <header className="_header-container">
            <div className="_header-menu-logo-container">
                <div
                    className="header header--1"
                    data-sticky="true"
                    id="headerSticky">
                    <div className="menu--product-categories">
                        <div className="menu__toggle">
                            <img src='/static/img/icons/menu-icon.svg' style={{color: 'white', height: '18px'}} />
                        </div>
                        <div className="menu__content">
                            <Menu
                                data={menuData.product_categories}
                                className="menu--dropdown"
                            />
                        </div>
                    </div>
                </div>
                {/* <div className="header__left __header-left"> */}
                <Link href="/">
                    <a>
                        <img
                            style={{ maxWidth: '10em' }}
                            src="/static/img/bluejestic/bluejestic_logo_c.png"
                            alt="bluejestic logo"
                        />
                    </a>
                </Link>
                {/* </div> */}
            </div>
            <div className="_header-search-bar">
                <SearchHeader />
            </div>
            <div className="_header-actions">
                <AlexHeaderActions />
            </div>
        </header>
    );
}

export default AlexHeader;
