import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from '../../elements/products/Product';
import { getColletionBySlug } from '../../../utilities/product-helper';
class ShopCarouselTopDeal extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { collections, collectionSlug } = this.props;
        const products = getColletionBySlug(collections, collectionSlug);

        return (
            <div className="ps-block--container-hightlight">
                <div className="ps-section__header">
                    <h3>Top Deals Super Hot Today</h3>
                </div>
                <div className="ps-section__content">
                    <div className="row">
                        {products.map(product => (
                            <div
                                className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6 "
                                key={product.id}>
                                <Product product={product} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(state => state.collection)(ShopCarouselTopDeal);
