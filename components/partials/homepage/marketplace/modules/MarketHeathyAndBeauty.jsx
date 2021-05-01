import React, { Component } from 'react';
import Link from 'next/link';

import { connect } from 'react-redux';
import Slider from 'react-slick';
import ProductSimple from '../../../../elements/products/ProductSimple';
import { carouselSingle } from '../../../../../utilities/carousel-helpers';
import { getColletionBySlug } from '../../../../../utilities/product-helper';

class MarketHeathyAndBeauty extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { categories, collectionSlug } = this.props;
        const products = getColletionBySlug(categories, collectionSlug);
        return (
            <div className="ps-block--products-of-category">
                <div className="ps-block__categories">
                    <h3>
                        Health & <br /> Beauty
                    </h3>
                    <ul>
                        <li>
                            <Link href="/shop" as="/shop/best-seller">
                                <a>Best Seller</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" as="/shop/new-arrivals">
                                <a>New Arrivals</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" as="/shop/women">
                                <a>Women</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" as="/shop/men">
                                <a>Men</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" as="/shop/girls">
                                <a>Girls</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" as="/shop/boys">
                                <a>Boys</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" as="/shop/baby">
                                <a>Baby</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" as="/shop/sale-and-deal">
                                <a>Sales & Deals</a>
                            </Link>
                        </li>
                    </ul>
                    <Link href="/shop">
                        <a className="ps-block__more-link">View All</a>
                    </Link>
                </div>
                <div className="ps-block__slider">
                    <Slider {...carouselSingle} className="ps-carousel">
                        <a>
                            <img
                                src="/static/img/slider/home-3/healthy-1.jpg"
                                alt="martfury"
                            />
                        </a>
                        <a>
                            <img
                                src="/static/img/slider/home-3/healthy-2.jpg"
                                alt="martfury"
                            />
                        </a>
                        <a>
                            <img
                                src="/static/img/slider/home-3/healthy-3.jpg"
                                alt="martfury"
                            />
                        </a>
                    </Slider>
                </div>
                <div className="ps-block__product-box">
                    {products.map((product, index) => {
                        if (index < 6) {
                            return (
                                <ProductSimple
                                    product={product}
                                    key={product.id}
                                />
                            );
                        }
                    })}
                </div>
            </div>
        );
    }
}

export default connect(state => state.collection)(MarketHeathyAndBeauty);
