import Link from 'next/link';
import React from 'react';
import { connect } from 'react-redux';
import {
    getSellerInfo,
    receiveSellerInfo,
} from '../../../store/seller-wall/action';

function Aside(props) {
    /*
    props to pass
    Profile image = 
    
    
    
    */
    return (
        <>
            {/* Vendor Card */}
            <div className="_aside-container">
                <div className="_aside-sticky-container">
                    <div className="_vendor-card-container">
                        <img
                            className="_vendor-card-banner-img"
                            // src={props.sellerStore.store_icon.url}
                            src="/static/img/product/banner-bg01.jpg"
                            alt="banner image"
                        />
                        <div className="_vendor-card-heading">
                            <img
                                className="_vendor-card-avatar"
                                src="/static/img/tavrovska-logo.jpg"
                                alt="avatar image"
                            />
                            <h4 className="_vendor-card-title">
                                Tavroska
                                {/* {props.seller.seller.title} */}
                            </h4>
                        </div>
                        <div className="_vendor-content-links">
                            <Link href="/about">
                                <a className="_vendor-content-link">About</a>
                            </Link>
                            <Link href="/list-product">
                                <a className="_vendor-content-link">Store</a>
                            </Link>
                            <a className="_vendor-content-link">Message</a>
                        </div>
                        <div className="_vendor-content-main-content">
                            <div className="_vendor-card-followers-container">
                                {!props.ratings && (
                                    <>
                                        <p className="_vendor-card-followers-amount">
                                            <i className="fa fa-users"></i> 5
                                            followers
                                        </p>
                                    </>
                                )}
                                {/* <Followers /> */}
                                {props.ratings && (
                                    <>
                                        <div className="_vendor-card-data-container">
                                            <div className="_vendor-card-data-item">
                                                {/* ! */}
                                                {/* icon and data */}
                                                <img
                                                    className="_vendor-card-svg-img"
                                                    src="/static/img/icons/followers.svg"
                                                />

                                                <span className="_vendor-card-data-text">
                                                    Followers
                                                </span>

                                                <span className="_vendor-card-data-number">
                                                    {/* follower count */}
                                                    160
                                                </span>
                                            </div>
                                            <div className="_vendor-card-data-item">
                                                <img
                                                    className="_vendor-card-svg-img"
                                                    src="/static/img/icons/products.svg"
                                                />

                                                <span className="_vendor-card-data-text">
                                                    {' '}
                                                    Products
                                                </span>

                                                <span className="_vendor-card-data-number">
                                                    152
                                                </span>
                                            </div>
                                            <div className="_vendor-card-data-item">
                                                <img
                                                    className="_vendor-card-svg-img"
                                                    src="/static/img/icons/post.svg"
                                                />
                                                <span className="_vendor-card-data-text">
                                                    Posts
                                                </span>

                                                <span className="_vendor-card-data-number">
                                                    14
                                                </span>
                                            </div>
                                            <div className="_vendor-card-data-item">
                                                <img
                                                    className="_vendor-card-svg-img"
                                                    src="/static/img/icons/sales.svg"
                                                />
                                                <span className="_vendor-card-data-text">
                                                    Sales
                                                </span>

                                                <span className="_vendor-card-data-number">
                                                    234
                                                </span>
                                            </div>
                                        </div>
                                        <div className="_vendor-card-data-line"></div>
                                        <div className="_vendor-card-data-rating">
                                            <p className="_vendor-card-data-rating-text">
                                                Rating
                                            </p>
                                            <div className="_vendor-card-data-star-rating">
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star checked"></span>
                                                <span className="fa fa-star"></span>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                            <a className="_vendor-card-btn" href="#">
                                Follow
                            </a>
                        </div>
                    </div>
                    {/* <ActivityCard
                        title={'Activity'}
                        avatar={
                            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
                        }
                    /> */}
                </div>
            </div>
        </>
    );
}

const mapStateToProps = (globalState) => {
    return {
        sellerStore: globalState.sellerWall.payload,
    };
};
const mapDispatchToProps = { getSellerInfo, receiveSellerInfo };

export default connect(mapStateToProps, mapDispatchToProps)(Aside);
