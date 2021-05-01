import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';

import MiniCart from './MiniCart';
import AccountQuickLinks from './AccountQuickLinks';

// inline style variables
const iconStyle = {
    color: 'white',
};

class HeaderActions extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { compare, wishlist, auth } = this.props;
        return (
            <div className="header__actions">
                <Link href="/account/compare">
                    <a className="header__extra">
                        <i className="fa fa-comment" style={iconStyle}></i>
                        <span>
                            <i>
                                {compare
                                    ? compare.compareTotal
                                    : compare.compareTotal}
                            </i>
                        </span>
                    </a>
                </Link>
                <Link href="/groups">
                    <a className="header__extra">
                        <i className="fa fa-users" style={iconStyle}></i>
                        <span>
                            <i>{wishlist.wishlistTotal}</i>
                        </span>
                    </a>
                </Link>
                <MiniCart iconStyle={iconStyle} />
                {auth.isLoggedIn && Boolean(auth.isLoggedIn) === true ? (
                    <AccountQuickLinks
                        isLoggedIn={true}
                        iconStyle={iconStyle}
                    />
                ) : (
                    <AccountQuickLinks
                        isLoggedIn={false}
                        iconStyle={iconStyle}
                    />
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(HeaderActions);
