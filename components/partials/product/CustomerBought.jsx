import React from 'react';
import Slider from 'react-slick';
import Product from '../../../components/elements/products/Product';
import {
    carouselFullwidth,
    carouselStandard,
} from '../../../utilities/carousel-helpers';
import { connect } from 'react-redux';
import { getColletionBySlug } from '../../../utilities/product-helper';

class CustomerBought extends React.Component {
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
                    className={`ps-section--default ps-customer-bought ${
                        boxed === true ? 'boxed' : ''
                    }`}>
                    <div className="ps-section__header">
                        <h3>Customers who bought this item also bought</h3>
                    </div>
                    <div className="ps-section__content">
                        <Slider
                            {...carouselFullwidth}
                            className="ps-carousel outside">
                            {products.map((product, index) => {
                                if (index < 8) {
                                    return (
                                        <Product
                                            product={product}
                                            key={product.id}
                                        />
                                    );
                                }
                            })}
                        </Slider>
                    </div>
                </div>
            );
        } else {
            return (
                <div
                    className={`ps-section--default ps-customer-bought ${
                        boxed === true ? 'boxed' : ''
                    }`}>
                    <div className="ps-section__header">
                        <h3>Customers who bought this item also bought</h3>
                    </div>
                    <div className="ps-section__content">
                        <Slider
                            {...carouselStandard}
                            className="ps-carousel outside">
                            {products.map((product, index) => {
                                if (index < 8) {
                                    return (
                                        <Product
                                            product={product}
                                            key={product.id}
                                        />
                                    );
                                }
                            })}
                        </Slider>
                    </div>
                </div>
            );
        }
    }
}

export default connect(state=>state.collection)(CustomerBought);
