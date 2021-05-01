import React, { Component } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import Product from '../../../elements/products/Product';
import { connect } from 'react-redux';
import { carouselStandard } from '../../../../utilities/carousel-helpers';
import { getColletionBySlug } from '../../../../utilities/product-helper';

class AutopartRecommendForYou extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { collections, collectionSlug } = this.props;
        const products = getColletionBySlug(collections, collectionSlug);
        return (
            <section className="ps-product-list ps-recommend-for-you">
                <div className="container">
                    <div className="ps-section__header">
                        <h3>RECOMMENDED FOR YOU</h3>
                        <ul className="ps-section__links">
                            <li>
                                <Link href="/shop">
                                    <a>Best Seller</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <a>New Arrival</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <a>Top Rated</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <a>Trending Products</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="ps-section__content">
                        <Slider
                            {...carouselStandard}
                            className="ps-carousel outside">
                            {products.map(product => (
                                <Product
                                    product={product}
                                    key={product.id}
                                />
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        );
    }
}

export default connect(state => state.collection)(AutopartRecommendForYou);
