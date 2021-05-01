import React from 'react';
import MobileHeaderActions from '../headers/modules/MobileHeaderActions';
import Link from 'next/link';
import Router from 'next/router';

class HeaderMobileProduct extends React.Component {
    constructor(props) {
        super(props);
    }

    handleBackToPrevious = e => {
        e.preventDefault();
        /*Router.back();*/
    };

    render() {
        return (
            <header
                className="header header--mobile header--mobile-product"
                data-sticky="true">
                <div className="navigation--mobile">
                    <div className="navigation__left">
                        <Link href="/shop">
                            <a
                                href="/"
                                className="header__back"
                            >
                                <i className="icon-chevron-left"></i>
                                <strong>Back to previous</strong>
                            </a>
                        </Link>

                    </div>
                    <div className="navigation__right">
                        <MobileHeaderActions />
                    </div>
                </div>
            </header>
        );
    }
}

export default HeaderMobileProduct;
