import React, { Component } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import Product from '../../../elements/products/Product';
import { getColletionBySlug } from '../../../../utilities/product-helper';
import { carouselStandard } from '../../../../utilities/carousel-helpers';
import { connect } from 'react-redux';

class ElectronicCamera extends Component {
    render() {
        const { collections, collectionSlug } = this.props;
        const products = getColletionBySlug(collections, collectionSlug);
        return (
            <div className="ps-product-list ps-product-list--2">
                <div className="container">
                    <div className="ps-section__header">
                        <h3>Cameras & Videos</h3>
                        <ul className="ps-section__links">
                            <li>
                                <Link href="/shop">
                                    <a>Videos</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <a>Projectors</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <a>Digital Cameras</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <a>Printers & Scanners</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <a>Accessories</a>
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
                                    key={product.title}
                                />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(state => state.collection)(ElectronicCamera);
