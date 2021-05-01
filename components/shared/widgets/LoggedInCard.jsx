import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';

function LoggedInCard(props) {
    const loggedInColor = {
        color: '#ffffff',
        borderBottom: '1px solid #ffffff'
    }
    return (
        <div className="___logged-in-card">
            <div
                className="__logged-in-title"
                style={
                    props.meta && {
                        backgroundImage: `url(${props.meta.backgroundImg})`,
                    }
                }>
                <h1 className="__landing-title" style={loggedInColor}>
                    {props.handle ? 'My Profile' : 'Welcome To Bluejestic'}
                </h1>
            </div>
            {props.handle && (
                <div className="__logged-in-user">
                    <Link href="/">
                        <div className="__user-row">
                            <img
                                src={props.handle.avatar}
                                className="__avatar"
                            />
                            <div>
                                {props.handle &&
                                    `${props.handle.firstName} ${props.handle.lastName}`}
                            </div>
                        </div>
                    </Link>
                </div>
            )}
            {props.meta && (
                <div className="__logged-in-meta __column">
                    <Link href={props.meta.storesLink || '/'}>
                        <div className="__row">
                            <img src="/static/img/icons/home.svg" />
                            <div className="__m-left">Stores</div>
                            <div className="__blue-font">
                                {props.meta.storeCount}
                            </div>
                        </div>
                    </Link>
                    <Link href={props.meta.groupsLink || '/'}>
                        <div className="__row">
                            <img src="/static/img/icons/Groups.svg"></img>
                            <div className="__m-left">Groups</div>
                            <div className="__blue-font">
                                {props.meta.groupsCount}
                            </div>
                        </div>
                    </Link>
                    <Link href={props.meta.friendsLink || '/'}>
                        <div className="__row">
                            <img src="/static/img/icons/friends.svg"></img>
                            <div className="__m-left">Friends</div>
                            <div className="__blue-font">
                                {props.meta.friendCount}
                            </div>
                        </div>
                    </Link>
                </div>
            )}
        </div>
    );
}

function mapStateToProps(store) {
    return {
        ...store.user,
    };
}

export default connect(mapStateToProps)(LoggedInCard);
