import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import CountDown from '../../../CountDown';
import Rating from '../../../Rating';
import { addItem } from '../../../../../store/cart/action';
import { addItemToCompare } from '../../../../../store/compare/action';
import { addItemToWishlist } from '../../../../../store/wishlist/action';

class InformationCountDown extends Component {
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
                            <a className="ml-2 text-capitalize">{product.vendor}</a>
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
                            <a className="text-uppercase ml-2">
                                <strong> {product.vendor}</strong>
                            </a>
                        </Link>
                    </p>
                    <p>
                        Status:
                        <a href="#">
                            <strong className="ps-tag--in-stock ml-2">
                                In stock
                            </strong>
                        </a>
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
                <div className="ps-product__countdown">
                    <figure>
                        <figcaption>
                            Don't Miss Out! This promotion will expires in
                        </figcaption>
                        <CountDown
                            timeTillDate="12 31 2020, 6:00 am"
                            timeFormat="MM DD YYYY, h:mm a"
                        />
                    </figure>
                    <figure>
                        <figcaption>Sold Items</figcaption>
                        <div
                            className="ps-product__progress-bar ps-progress"
                            data-value="13">
                            <div className="ps-progress__value">
                                <span></span>
                            </div>
                            <p>
                                <b>20/85</b> Sold
                            </p>
                        </div>
                    </figure>
                </div>
                <div className="ps-product__shopping">
                    <figure>
                        <figcaption>Quantity</figcaption>
                        <div className="form-group--number">
                            <button
                                className="up"
                                onClick={this.handleIncreaseItemQty.bind(this)}>
                                <i className="fa fa-plus"></i>
                            </button>
                            <button
                                className="down"
                                onClick={this.handleDecreaseItemQty.bind(this)}>
                                <i className="fa fa-minus"></i>
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
                    <div className="ps-product__actions">
                        <a
                            href="#"
                            onClick={this.handleAddItemToWishlist.bind(this)}>
                            <i className="icon-heart"></i>
                        </a>
                        <a
                            href="#"
                            onClick={this.handleAddItemToCompare.bind(this)}>
                            <i className="icon-chart-bars"></i>
                        </a>
                    </div>
                </div>
                <div className="ps-product__specification">
                    <a className="report" href="#">
                        Report Abuse
                    </a>
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

export default connect(mapStateToProps)(InformationCountDown);
