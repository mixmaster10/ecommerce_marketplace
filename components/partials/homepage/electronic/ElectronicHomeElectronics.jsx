import React, { Component } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import Product from '../../../elements/products/Product';
import { carouselStandard } from '../../../../utilities/carousel-helpers';
import { connect } from 'react-redux';
import { getColletionBySlug } from '../../../../utilities/product-helper';

class ElectronicHomeElectronics extends Component {
    render() {
        const { categories, collectionSlug } = this.props;
        const products = getColletionBySlug(categories, collectionSlug);
        return (
            <div className="ps-product-list ps-product-list--2">
                <div className="container">
                    <div className="ps-section__header">
                        <h3>Home Electronics</h3>
                        <ul className="ps-section__links">
                            <li>
                                <Link href="/shop">
                                    <a>Smart</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <a>TV LED</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <a>TVs</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <a>Air Conditions</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <a>Sony Speakers</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <a>Panasonic Refrigerators</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="ps-section__content">
                        <Slider
                            {...carouselStandard}
                            className="ps-carousel outside">
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
export default connect(state => state.collection)(ElectronicHomeElectronics);
