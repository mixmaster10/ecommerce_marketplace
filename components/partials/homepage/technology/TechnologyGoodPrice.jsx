import React, { Component } from 'react';
import Link from 'next/link';
import ProductHorizontal from '../../../elements/products/ProductHorizontal';
import { getColletionBySlug } from '../../../../utilities/product-helper';
import { connect } from 'react-redux';

class TechnologyGoodPrice extends Component {
    render() {
        const { collections, collectionSlug } = this.props;
        const products = getColletionBySlug(collections, collectionSlug);
        return (
            <div className="ps-product-list">
                <div className="container">
                    <div className="ps-section__header">
                        <h3>Good Price Accessories</h3>
                        <ul className="ps-section__links">
                            <li>
                                <Link href="/shop">
                                    <a>HeadPhone</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <a>Charge</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <a>Case USB</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <a>Hard Drive</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <a>TV Box</a>
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
                        <div className="row">
                            {products.map(product => (
                                <div
                                    className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
                                    key={product.id}>
                                    <ProductHorizontal product={product} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(state=>state.collection)(TechnologyGoodPrice);
