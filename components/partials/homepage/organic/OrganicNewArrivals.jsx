import React, { Component } from 'react';
import Link from 'next/link';

import Product from '../../../elements/products/Product';
import { getColletionBySlug } from '../../../../utilities/product-helper';
import { connect } from 'react-redux';

class OrganicNewArrivals extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { collections, collectionSlug } = this.props;
        const products = getColletionBySlug(collections, collectionSlug);
        return (
            <div className="ps-product-list ps-product-list--2">
                <div className="container">
                    <div className="ps-section__header">
                        <h3>New Arrivals</h3>
                        <ul className="ps-section__links">
                            <li>
                                <Link href="/shop">
                                    <a>Milks & Creams</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <a>Fruits</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <a>Vegetables</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <a>Ocean Foods</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    <a>Fresh Meats</a>
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
                                    className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12"
                                    key={product.id}>
                                    <Product product={product} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(state=>state.collection)(OrganicNewArrivals);
