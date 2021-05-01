import React from 'react';
import { connect } from 'react-redux';

import DescriptionFullContent from './modules/description/DescriptionFullContent';
import ThumbnailFullContent from './modules/thumbnail/ThumbnailFullContent';
import InformationFullContent from './modules/information/InformationFullContent';
import { addItem } from '../../../store/cart/action';
import { addItemToCompare } from '../../../store/compare/action';
import { addItemToWishlist } from '../../../store/wishlist/action';

import { extended } from '../../../public/static/data/product';
class ProductDetailFullContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
        };
    }
    handleAddItemToCart = e => {
        e.preventDefault();
        const { product } = this.props;
        let tempProduct = product;
        tempProduct.quantity = this.state.quantity;
        this.props.dispatch(addItem(product));
    };

    handleAddItemToCompare = e => {
        e.preventDefault();
        const { product } = this.props;
        this.props.dispatch(addItemToCompare(product));
    };

    handleAddItemToWishlist = e => {
        e.preventDefault();
        const { product } = this.props;
        this.props.dispatch(addItemToWishlist(product));
    };

    handleIncreaseItemQty = e => {
        e.preventDefault();
        this.setState({ quantity: this.state.quantity + 1 });
    };

    handleDecreaseItemQty = e => {
        e.preventDefault();
        if (this.state.quantity > 1) {
            this.setState({ quantity: this.state.quantity - 1 });
        }
    };

    render() {
        const product = extended;
        const { currency } = this.props;
        return (
            <div className="ps-product--detail ps-product--full-content">
                <div className="ps-product__top">
                    <div className="ps-product__header">
                        <ThumbnailFullContent product={extended} />
                        <InformationFullContent product={extended} />
                    </div>
                    <div className="ps-product__price-right">
                        {product.is_sale === true ? (
                            <h4 className="ps-product__price sale">
                                <del className="mr-2">
                                    {currency ? currency.symbol : '$'}
                                    {product.sale_price}
                                </del>
                                {currency ? currency.symbol : '$'}
                                {product.price}
                            </h4>
                        ) : (
                            <h4 className="ps-product__price">
                                {currency ? currency.symbol : '$'}
                                {product.price}
                            </h4>
                        )}

                        <div className="ps-product__shopping">
                            <figure>
                                <figcaption>Quantity</figcaption>
                                <div className="form-group--number">
                                    <button
                                        className="up"
                                        onClick={this.handleIncreaseItemQty.bind(
                                            this
                                        )}>
                                        +
                                    </button>
                                    <button
                                        className="down"
                                        onClick={this.handleDecreaseItemQty.bind(
                                            this
                                        )}>
                                        -
                                    </button>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder={this.state.quantity}
                                        disabled
                                    />
                                </div>
                            </figure>
                            <a
                                className="ps-btn ps-btn--gray"
                                href="#"
                                onClick={this.handleAddItemToCart.bind(this)}>
                                Add to cart
                            </a>
                            <a
                                className="ps-btn"
                                href="#"
                                onClick={this.handleAddItemToCart.bind(this)}>
                                Buy Now
                            </a>
                            <div className="ps-product__actions">
                                <a
                                    href="#"
                                    onClick={this.handleAddItemToWishlist.bind(
                                        this
                                    )}>
                                    <i className="icon-heart mr-2"></i>
                                    Add to wishlist
                                </a>
                                <a
                                    href="#"
                                    onClick={this.handleAddItemToCompare.bind(
                                        this
                                    )}>
                                    <i className="icon-chart-bars mr-2"></i>
                                    Compare
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <DescriptionFullContent />
            </div>
        );
    }
}
const mapStateToProps = state => {
    return state.setting;
};

export default connect(mapStateToProps)(ProductDetailFullContent);
