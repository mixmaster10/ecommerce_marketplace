import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';

import MiniCart from './MiniCart';
import AccountQuickLinks from './AccountQuickLinks';

class ElectronicHeaderActions extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { wishlist, auth } = this.props;
        return (
            <div className="header__actions">
                <Link href="/account/wishlist">
                    <a className="header__extra">
                        <i className="icon-heart"></i>
                        <span>
                            <i>{wishlist.wishlistTotal}</i>
                        </span>
                    </a>
                </Link>
                <MiniCart />
                {auth.isLoggedIn && Boolean(auth.isLoggedIn) === true ? (
                    <AccountQuickLinks isLoggedIn={true} />
                ) : (
                    <AccountQuickLinks isLoggedIn={false} />
                )}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps)(ElectronicHeaderActions);
