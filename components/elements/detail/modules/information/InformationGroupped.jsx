import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Rating from '../../../Rating';
import { addItem } from '../../../../../store/cart/action';
import { addItemToCompare } from '../../../../../store/compare/action';
import { addItemToWishlist } from '../../../../../store/wishlist/action';

class InformationGroupped extends Component {
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
        const { product, currency } = this.props;
        return (
            <div className="ps-product__info">
                <h1>{product.title}</h1>
                <div className="ps-product__meta">
                    <p>
                        Brand:
                        <Link href="/shop">
                            <a className="ml-2 text-capitalize">
                                {product.vendor}
                            </a>
                        </Link>
                    </p>
                    <div className="ps-product__rating">
                        <Rating />
                        <span>(1 review)</span>
                    </div>
                </div>
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
                <div className="ps-product__desc">
                    <p>
                        Sold By:
                        <Link href="/shop">
                            <a>
                                <strong> {product.vendor}</strong>
                            </a>
                        </Link>
                    </p>
                    <ul className="ps-list--dot">
                        <li>Unrestrained and portable active stereo speaker</li>
                        <li> Free from the confines of wires and chords</li>
                        <li> 20 hours of portable capabilities</li>
                        <li>
                            Double-ended Coil Cord with 3.5mm Stereo Plugs
                            Included
                        </li>
                        <li> 3/4″ Dome Tweeters: 2X and 4″ Woofer: 1X</li>
                    </ul>
                </div>
                <div className="ps-product__groupped">
                    <div className="table-responsive">
                        <table className="table ps-table--product-groupped">
                            <tbody>
                                <tr>
                                    <td>
                                        <a className="ps-btn" href="#">
                                            Read more
                                        </a>
                                    </td>
                                    <td>
                                        <a
                                            className="title"
                                            href="product-default.html">
                                            Aroma Rice Cooker
                                        </a>
                                    </td>
                                    <td>
                                        <p>$275.50</p>
                                        <p>
                                            Status:
                                            <span className="ps-tag--out-stock">
                                                Out of stock
                                            </span>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a className="ps-btn" href="#">
                                            Read more
                                        </a>
                                    </td>
                                    <td>
                                        <a
                                            className="title"
                                            href="product-default.html">
                                            Korea Fabric Chair In Brown Color
                                        </a>
                                    </td>
                                    <td>
                                        <p> $320.54</p>
                                        <p>
                                            Status:
                                            <span className="ps-tag--out-stock">
                                                Out of stock
                                            </span>
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a className="ps-btn" href="#">
                                            Read more
                                        </a>
                                    </td>
                                    <td>
                                        <a
                                            className="title"
                                            href="product-default.html">
                                            Set 14-Piece Knife From KichiKit
                                        </a>
                                    </td>
                                    <td>
                                        <p>$85.62</p>
                                        <p>
                                            Status:
                                            <span className="ps-tag--out-stock">
                                                Out of stock
                                            </span>
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="ps-product__shopping">
                    <a className="ps-btn ps-btn--black" href="#">
                        Add to cart
                    </a>
                    <a className="ps-btn" href="#">
                        Buy Now
                    </a>
                    <div className="ps-product__actions">
                        <a href="#">
                            <i className="icon-heart"></i>
                        </a>
                        <a href="#">
                            <i className="icon-chart-bars"></i>
                        </a>
                    </div>
                </div>
                <div className="ps-product__specification">
                    <Link href="/page/blank">
                        <a className="report">Report Abuse</a>
                    </Link>
                    <p>
                        <strong>SKU:</strong> SF1133569600-1
                    </p>
                    <p className="categories">
                        <strong> Categories:</strong>
                        <Link href="/shop">
                            <a>Consumer Electronics</a>
                        </Link>
                        <Link href="/shop">
                            <a>Refrigerator</a>
                        </Link>
                        <Link href="/shop">
                            <a>Babies & Moms</a>
                        </Link>
                    </p>
                    <p className="tags">
                        <strong> Tags</strong>
                        <Link href="/shop">
                            <a>sofa</a>
                        </Link>
                        <Link href="/shop">
                            <a>technologies</a>
                        </Link>
                        <Link href="/shop">
                            <a>wireless</a>
                        </Link>
                    </p>
                </div>
                <div className="ps-product__sharing">
                    <a className="facebook" href="#">
                        <i className="fa fa-facebook"></i>
                    </a>
                    <a className="twitter" href="#">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a className="google" href="#">
                        <i className="fa fa-google-plus"></i>
                    </a>
                    <a className="linkedin" href="#">
                        <i className="fa fa-linkedin"></i>
                    </a>
                    <a className="instagram" href="#">
                        <i className="fa fa-instagram"></i>
                    </a>
                </div>
                <div className="ps-product__actions-mobile">
                    <a
                        className="ps-btn ps-btn--black"
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
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return state.setting;
};

export default connect(mapStateToProps)(InformationGroupped);
