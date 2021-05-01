import React, { Component } from 'react';
import Slider from 'react-slick';

import Product from '../../../elements/products/Product';
import { carouselStandard } from '../../../../utilities/carousel-helpers';
import { getColletionBySlug } from '../../../../utilities/product-helper';
import { connect } from 'react-redux';

class FurnitureTrendingProducts extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { collections, collectionSlug } = this.props;
        const products = getColletionBySlug(collections, collectionSlug);
        return (
            <div className="ps-home-trending-products ps-section--furniture">
                <div className="container">
                    <div className="ps-section__header">
                        <h3>Trending Products</h3>
                    </div>
                    <div className="ps-section__content">
                        <Slider {...carouselStandard}>
                            {products.map(product => (
                                <div className="item" key={product.id}>
                                    <Product product={product} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(state => state.collection)(FurnitureTrendingProducts);
