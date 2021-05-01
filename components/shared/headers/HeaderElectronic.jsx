import React, { Component } from 'react';

import Link from 'next/link';
import SearchHeader from './modules/SearchHeader';
import menuData from '../../../public/static/data/menu';
import Menu from '../../elements/menu/Menu';
import CurrencyDropdown from './modules/CurrencyDropdown';
import LanguageSwicher from './modules/LanguageSwicher';
import ElectronicHeaderActions from './modules/ElectronicHeaderActions';
import { stickyHeader } from '../../../utilities/common-helpers';

class HeaderElectronic extends Component {
    constructor({ props }) {
        super(props);
    }

    componentDidMount() {
        if (process.browser) {
            window.addEventListener('scroll', stickyHeader);
        }
    }

    render() {
        const menuElectronic = [
            {
                text: 'Hot Deal',
                url: '/shop',
                icon: 'icon-star',
            },
            {
                text: 'Home Electronics',
                url: '/shop',
                icon: 'icon-laundry',
            },
            {
                text: 'Computer & Technology',
                url: '/shop',
                icon: 'icon-laptop',
            },
            {
                text: 'Camera & Videos',
                url: '/shop',
                icon: 'icon-camera2',
            },
            {
                text: 'Office Electronics',
                url: '/shop',
                icon: 'icon-surveillance',
            },
        ];
        return (
            <header
                className="header header--standard header--electronic"
                id="headerSticky">
                <div className="header__top">
                    <div className="container">
                        <div className="header__left">
                            <p>Welcome to Martfury Online Shopping Store !</p>
                        </div>
                        <div className="header__right">
                            <ul className="header__top-links">
                                <li>
                                    <Link href="/vendor/store-list">
                                        <a>Store Location</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page/blank">
                                        <a>Track Your Order</a>
                                    </Link>
                                </li>
                                <li>
                                    <CurrencyDropdown />
                                </li>
                                <li>
                                    <LanguageSwicher />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="header__content">
                    <div className="container">
                        <div className="header__content-left">
                            <Link href="/home/electronic">
                                <a className="ps-logo">
                                    <img
                                        src="/static/img/logo-electronic.png"
                                        alt="martfury"
                                    />
                                </a>
                            </Link>
                            <div className="menu--product-categories">
                                <div className="menu__toggle">
                                    <i className="icon-menu"></i>
                                    <span> Shop by Department</span>
                                </div>
                                <div className="menu__content">
                                    <Menu
                                        data={menuData.product_categories}
                                        className="menu--dropdown"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="header__content-center">
                            <SearchHeader />
                        </div>
                        <div className="header__content-right">
                            <ElectronicHeaderActions />
                        </div>
                    </div>
                </div>
                <nav className="navigation">
                    <div className="container">
                        <ul className="menu menu--electronic">
                            {menuElectronic.map((menuItem) => (
                                <li key={menuItem.text}>
                                    <Link href={menuItem.url}>
                                        <a>
                                            <i className={menuItem.icon}></i>{' '}
                                            {menuItem.text}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default HeaderElectronic;
