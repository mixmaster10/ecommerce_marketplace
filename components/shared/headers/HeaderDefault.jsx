import React, { Component } from 'react';
import Link from 'next/link';
import HeaderActions from './modules/HeaderActions';
import SearchHeader from './modules/SearchHeader';
import Menu from '../../elements/menu/Menu';
import menuData from '../../../public/static/data/menu';
import BLMMenuBanner from '../../elements/menu/BLMMenuBanner';
import AdSpaceLeft from '../../elements/menu/AdSpaceLeft';
import { stickyHeader } from '../../../utilities/common-helpers';

const containerSytle = {
    display: 'flex',
    justifyContent: 'center',
};
const barStyle = {
    width: '100%',
};

class HeaderDefault extends Component {
    constructor({ props }) {
        super(props);
    }

    componentDidMount() {
        if (process.browser) {
            window.addEventListener('scroll', stickyHeader);
        }
        console.log(menuData.product_categories);
    }

    render() {
        return (
            <header
                className="header header--1"
                data-sticky="true"
                id="headerSticky">
                <div className="header__top" style={containerSytle}>
                    <div className="ps-container" style={barStyle}>
                        <div style={{ maxWidth: '35px', marginRight: '15px' }}>
                            <div className="menu--product-categories">
                                <div className="menu__toggle">
                                    <i
                                        style={{
                                            color: 'white',
                                            width: '35px',
                                        }}
                                        className="icon-menu"></i>
                                </div>
                                <div className="menu__content">
                                    <Menu
                                        data={menuData.product_categories}
                                        className="menu--dropdown"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="header__left __header-left">
                            <Link href="/">
                                <a className="">
                                    <img
                                        style={{ maxWidth: '10em' }}
                                        src="/static/img/bluejestic/logo2.png"
                                        alt="bluejestic logo"
                                    />
                                </a>
                            </Link>
                        </div>
                        <AdSpaceLeft></AdSpaceLeft>
                        <div
                            style={{ marginLeft: '2em' }}
                            className="header__center">
                            <SearchHeader />
                        </div>
                        <div className="header__right">
                            <HeaderActions />
                        </div>
                    </div>
                </div>
                <BLMMenuBanner></BLMMenuBanner>
            </header>
        );
    }
}

export default HeaderDefault;
