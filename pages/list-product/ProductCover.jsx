import React from 'react';
import Link from 'next/link';

const ProductCover = (props) => {
    return (
        <div>
            <div className="shopcover-bg">
                <div className="shop-profile">
                    <div className="shop-logo">
                        <img
                            className="img-fluid"
                            src="/static/img/tavrovska-logo.jpg"
                            alt=""
                        />
                    </div>
                    <div className="shop-info">
                        <span className="shop-name">TAVROVSKA</span>
                        <span className="shop-add">Orlando, Fl</span>
                    </div>
                </div>
                <a href="#" className="follow">
                    Follow
                </a>
            </div>
            <div className="profilecover-info chat-box">
                <div className="profilepage-info">
                    <Link href="/about">
                        <a href="#">About</a>
                    </Link>
                    <a href="#">Events</a>
                    <Link href="/seller-wall">
                        <a href="#">Feed</a>
                    </Link>
                    <a href="#">Followers</a>
                    <a href="#">Message</a>
                    <a href="#">Photos</a>
                    <a href="#">Videos</a>
                </div>
            </div>
        </div>
    );
};

export default ProductCover;
