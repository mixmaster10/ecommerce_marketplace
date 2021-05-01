import React, { Component } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import { carouselSingle } from '../../../utilities/carousel-helpers.js';

class ShopCarouselBanner extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="ps-shop-banner">
                <Slider {...carouselSingle} className="ps-carousel inside">
                    <div className="item">
                        <Link href="/shop">
                            <img
                                src="/static/img/slider/shop-default/1.jpg"
                                alt="martfury"
                            />
                        </Link>
                    </div>
                    <div className="item">
                        <Link href="/shop">
                            <img
                                src="/static/img/slider/shop-default/2.jpg"
                                alt="martfury"
                            />
                        </Link>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default ShopCarouselBanner;
