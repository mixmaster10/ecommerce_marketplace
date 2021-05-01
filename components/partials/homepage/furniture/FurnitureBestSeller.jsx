import React, { Component } from 'react';
import Slider from 'react-slick';
import Product from '../../../elements/products/Product';
import { carouselStandard } from '../../../../utilities/carousel-helpers';
import { connect } from 'react-redux';
import { getColletionBySlug } from '../../../../utilities/product-helper';

class FurnitureBestSeller extends Component {
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
                        <h3>BEST SELLER PRODUCTS</h3>
                    </div>
                    <div className="ps-section__content">
                        <Slider {...carouselStandard}>
                            {products.map(product => {
                                return (
                                    <div className="item" key={product.id}>
                                        <Product product={product} />
                                    </div>
                                );
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(state => state.collection)(FurnitureBestSeller);
