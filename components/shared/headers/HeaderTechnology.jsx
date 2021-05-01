import React, { Component } from 'react';

import Link from 'next/link';
import SearchHeader from './modules/SearchHeader';
import menuData from '../../../public/static/data/menu';
import Menu from '../../elements/menu/Menu';
import CurrencyDropdown from './modules/CurrencyDropdown';
import LanguageSwicher from './modules/LanguageSwicher';
import ElectronicHeaderActions from './modules/ElectronicHeaderActions';

class HeaderTechnology extends Component {
    constructor({ props }) {
        super(props);
    }

    componentDidMount() {
        if (process.browser) {
            window.addEventListener('scroll', this.handleScroll);
        }
    }

    handleScroll = () => {
        let number =
            window.pageXOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0;

        if (number >= 300) {
            document
                .getElementById('headerSticky')
                .classList.add('header--sticky');
        } else {
            document
                .getElementById('headerSticky')
                .classList.remove('header--sticky');
        }
    };

    render() {
        const menuTechnology = [
            {
                text: 'Hot Deal',
                url: '/home/technology',
                icon: 'icon-star',
            },
            {
                text: 'Smartphone',
                url: '/home/technology',
                icon: 'icon-smartphone',
            },
            {
                text: 'Tablets',
                url: '/home/technology',
                icon: 'ion-ipad',
            },
            {
                text: 'Laptop',
                url: '/home/technology',
                icon: 'icon-laptop',
            },
            {
                text: 'Sounds',
                url: '/home/technology',
                icon: 'icon-headphone',
            },
            {
                text: 'Technology Toys',
                url: '/home/technology',
                icon: 'icon-mic2',
            },
            {
                text: 'Accesories',
                url: '/home/technology',
                icon: 'icon-headphones',
            },
        ];
        return (
            <header
                className="header header--standard header--technology"
                id="headerSticky">
                <div className="header__top">
                    <div className="container">
                        <div className="header__left">
                            <p>
                                SHOPPING CENTER
                                <strong className="ml-1"> for all orders over $100</strong>
                            </p>
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
                            <Link href="/home/technology">
                                <a className="ps-logo">
                                    <img
                                        src="/static/img/logo-technology.png"
                                        alt="martfury"
                                    />
                                </a>
                            </Link>
                            <div className="menu--product-categories">
                                <div className="menu__toggle">
                                    <i className="icon-menu"></i>
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
                        <ul className="menu menu--technology">
                            {menuTechnology.map(menuItem => (
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

export default HeaderTechnology;
