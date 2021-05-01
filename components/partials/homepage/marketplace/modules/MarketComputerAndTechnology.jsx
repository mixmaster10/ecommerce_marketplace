import React, { Component } from 'react';
import Link from 'next/link';

import Slider from 'react-slick';
import ProductSimple from '../../../../elements/products/ProductSimple';
import { carouselSingle } from '../../../../../utilities/carousel-helpers';
import { getColletionBySlug } from '../../../../../utilities/product-helper';
import { connect } from 'react-redux';

class MarketComputerAndTechnology extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { categories, collectionSlug } = this.props;
        const products = getColletionBySlug(categories, collectionSlug);

        return (
            <div className="ps-block--products-of-category">
                <div className="ps-block__categories">
                    <h3>Computer & Techologies</h3>
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
                                <a>Desktop PC</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" as="/shop/men">
                                <a>Laptop</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" as="/shop/smartphone">
                                <a>Smartphones</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" as="/shop/tablets">
                                <a>Tablets</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" as="/shop/storage-and-memory">
                                <a>Storage & Memory</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" as="/shop/pc-component">
                                <a>PC Component</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" as="/shop/game-accessories">
                                <a>Game Accessories</a>
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
                                src="/static/img/slider/home-3/technology-1.jpg"
                                alt="martfury"
                            />
                        </a>
                        <a>
                            <img
                                src="/static/img/slider/home-3/technology-2.jpg"
                                alt="martfury"
                            />
                        </a>
                        <a>
                            <img
                                src="/static/img/slider/home-3/technology-3.jpg"
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
export default connect(state => state.collection)(MarketComputerAndTechnology);
