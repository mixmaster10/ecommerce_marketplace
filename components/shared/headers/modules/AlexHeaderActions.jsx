import React from 'react';
import Link from 'next/link';
import MiniCart from './MiniCart';
import { connect } from 'react-redux';
import AccountQuickLinks from './AccountQuickLinks';
const iconStyle = {
    color: 'white',
    height: '25px',

    // margin: '0 .25em 0 .25em ',
};

function AlexHeaderActions(props) {
    const { compare, wishlist, auth } = props;

    return (
        <>
            <div className="_header-actions-container">
                <div className="_header-action-container">
                    <Link href="/">
                        <a className="header__extra">
                            <img src='/static/img/icons/home1.svg' style={iconStyle}></img>
                        </a>
                    </Link>
                    <p className="_header-action-text">Home</p>
                </div>
                <div className="_header-action-container">
                    <Link href="/notifications">
                        <a className="header__extra">
                            <img src='/static/img/icons/notification.svg' style={iconStyle}></img>
                            {/* <span>
                        <i>{wishlist.wishlistTotal}</i>
                    </span> */}
                        </a>
                    </Link>
                    <p className="_header-action-text">Notifications</p>
                </div>
                <div className="_header-action-container">
                    <Link href="/stores">
                        <a className="header__extra">
                            <img src='/static/img/icons/store.svg' style={iconStyle}></img>
                            {/* <span>
                        <i>{wishlist.wishlistTotal}</i>
                    </span> */}
                        </a>
                    </Link>
                    <p className="_header-action-text">Stores</p>
                </div>
                <div className="_header-action-container">
                    <Link href="/groups">
                        <a className="header__extra">
                            <img src='/static/img/icons/groups1.svg' style={iconStyle}></img>

                            <span>{/* <i>{wishlist.wishlistTotal}</i> */}</span>
                        </a>
                    </Link>
                    <p className="_header-action-text">Groups</p>
                </div>
                <div className="_header-action-container">
                    <Link href="/messaging">
                        <a className="header__extra">
                            <img src='/static/img/icons/messaging.svg' style={iconStyle}></img>
                            <span>{/* <i>{wishlist.wishlistTotal}</i> */}</span>
                        </a>
                    </Link>
                        <p className="_header-action-text">Messaging</p>
                </div>
                <div className="_header-action-container">
                    <MiniCart iconStyle={iconStyle} />
                    <p className="_header-action-text">Cart</p>
                </div>
                <div className="_header-action-container">
                    <Link href="/about">
                        <a className="header__extra">
                            <img src='/static/img/icons/Profile.svg' style={iconStyle}></img>
                            <span>{/* <i>{wishlist.wishlistTotal}</i> */}</span>
                        </a>
                    </Link>
                    <p className="_header-action-text">Profile</p>
                </div>
            </div>
        </>
    );
}
const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(AlexHeaderActions);
