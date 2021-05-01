import React, { Component } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';

import Product from '../../../elements/products/Product';
import { carouselStandard } from '../../../../utilities/carousel-helpers';
import { getColletionBySlug } from '../../../../utilities/product-helper';
import { connect } from 'react-redux';

class TechnologySmartphone extends Component {
    render() {
        const { categories, collectionSlug } = this.props;
        const products = getColletionBySlug(categories, collectionSlug);
        return (
            <div className="ps-product-list">
                <div className="container">
                    <div className="ps-section__header">
                        <h3>Popular Smartphones & Tablets</h3>
                        <ul className="ps-section__links">
                            <li>
                                <Link href="/shop">
                                    <a>Iphone</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <a>IPad</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <a>Samsung</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <a>View All</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="ps-section__content">
                        <Slider {...carouselStandard} className="ps-carousel outside">
                            {products.map(product => (
                                <Product product={product} key={product.id} />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(state=>state.collection)(TechnologySmartphone);
