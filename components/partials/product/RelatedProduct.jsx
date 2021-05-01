import React, { Component } from 'react';
import Slider from 'react-slick';
import Product from '../../../components/elements/products/Product';
import { carouselFullwidth, carouselStandard } from '../../../utilities/carousel-helpers';
import { getColletionBySlug } from '../../../utilities/product-helper';
import { connect } from 'react-redux';

class RelatedProduct extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { boxed, layout } = this.props;
        const { collections, collectionSlug } = this.props;
        const products = getColletionBySlug(collections, collectionSlug);
        if (layout === 'fullwidth') {
            return (
                <div
                    className={`ps-section--default ps-related-products ${
                        boxed === true ? 'boxed' : ''
                    }`}>
                    <div className="ps-section__header">
                        <h3>Related products</h3>
                    </div>
                    <div className="ps-section__content">
                        <Slider {...carouselFullwidth} infinite={products.length < 7 ? false : true}
                                className="ps-carousel">
                            {products.map(product => {
                                return (
                                    <Product product={product} key={product.id}/>
                                );
                            })}
                        </Slider>
                    </div>
                </div>
            );
        } else {
            return (
                <div
                    className={`ps-section--default ps-related-products ${
                        boxed === true ? 'boxed' : ''
                    }`}>
                    <div className="ps-section__header">
                        <h3>Related products</h3>
                    </div>
                    <div className="ps-section__content">
                        <Slider {...carouselStandard} className="ps-carousel">
                            {products.map(product => {
                                return (
                                    <Product product={product} key={product.id}/>
                                );
                            })}
                        </Slider>
                    </div>
                </div>
            );
        }

    }
}

export default connect(state => state.collection)(RelatedProduct);
