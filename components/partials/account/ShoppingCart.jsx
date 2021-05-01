import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    getCart,
    increaseItemQty,
    decreaseItemQty,
    removeItem,
} from '../../../store/cart/action';

import Link from 'next/link';
import ProductCart from '../../elements/products/ProductCart';
import { Input } from 'antd';
class ShoppingCart extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getCart());
    }

    handleIncreaseItemQty(product) {
        this.props.dispatch(increaseItemQty(product));
    }

    handleDecreaseItemQty(product) {
        this.props.dispatch(decreaseItemQty(product));
    }

    handleRemoveCartItem = product => {
        this.props.dispatch(removeItem(product));
    };

    render() {
        const { amount, cartTotal, cartItems, cartGroupItems } = this.props;
        let currentCartItems = [];
        let currentGroupItems = {};
        if (cartItems && cartItems.length > 0) {
            currentCartItems = cartItems;
            currentGroupItems = cartGroupItems;

        }
        return (
            <div className="_shipping">
                <div className="container">
                    <div className="_shippingContent">
                        <div className="row">
                            <div className="col-sm-6">
                                <h4 className="_h4style"> Checkout ( Items)</h4>
                            </div>
                            <div className="col-sm-2 col-sm-2--shopping _shippinginfo">
                                <figure>
                                    <Link href="/account/checkout">
                                        <a >Keep Shopping</a>
                                    </Link>
                                </figure>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-8">
                                <div className="_shippinginfo">
                                    <div className="_ps-block__panel">
                                        <h4 className="_h4style">Shopping Cart</h4>
                                        <div className="table-responsive table-responsive--checkout">
                                            {/* satya added this which is needed to group the items as per the store 
                                            get the store group data, first add group and loop inside on group, two map*/}
                                            {/* <React.Fragment>
                                                <div className="_form-group">
                                                    <img
                                                        className="_checkout-avatar"
                                                        src="https://images.unsplash.com/photo-1565768028719-709cc89b4bba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80"
                                                        alt="avatar image"
                                                    />
                                                    <Link href="/account/checkout">
                                                        <a> Jane Store</a>
                                                    </Link>
                                                </div>
                                                {
                                                    currentCartItems.map((product, idx) => (
                                                        <tr key={product.id}>
                                                            <td>
                                                                <ProductCart product={product} />

                                                            </td>
                                                            <div className="_activity-card-divider"></div>
                                                            <td className="price">
                                                                ${product.price}
                                                            </td>
                                                        </tr>

                                                    ))}
                                            </React.Fragment>  */}
                                            <div className="_form-group">
                                                <img className="_checkout-avatar"
                                                    src="https://images.unsplash.com/photo-1565768028719-709cc89b4bba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80"
                                                    alt="avatar image"
                                                />
                                                <Link href="/account/checkout">
                                                    <a> Jane Store</a>
                                                </Link>
                                            </div>
                                            <table className="table _ps-tableshopping-cart">
                                                <tbody>
                                                    {currentCartItems.map(product => (
                                                        <tr key={product.id}>
                                                            <td>
                                                                <ProductCart product={product} />
                                                            </td>
                                                            <td className="price">
                                                                ${product.price}
                                                            </td>
                                                            <td>
                                                                <div className="form-group--number">
                                                                    <button
                                                                        className="up"
                                                                        onClick={this.handleIncreaseItemQty.bind(
                                                                            this,
                                                                            product
                                                                        )}>

                                                                    </button>
                                                                    <button
                                                                        className="down"
                                                                        onClick={this.handleDecreaseItemQty.bind(
                                                                            this,
                                                                            product
                                                                        )}>

                                                                    </button>
                                                                    <input
                                                                        className="form-control"
                                                                        type="text"
                                                                        placeholder="1"
                                                                        value={product.quantity}
                                                                        readOnly={true}
                                                                    />
                                                                </div>
                                                            </td>
                                                            <td>
                                                                $
                                                {product.quantity *
                                                                    product.price}
                                                            </td>
                                                            <td>
                                                                <a
                                                                    href="#"
                                                                    onClick={this.handleRemoveCartItem.bind(
                                                                        this,
                                                                        product
                                                                    )}>
                                                                    <i className="icon-cross"></i>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                            <div className="_activity-card-divider"></div>
                                            <div className="row">
                                                <div className="col-sm-9"></div>
                                                <div className="col-sm-3">
                                                    <div className="_form-group">
                                                        <Link href="/account/checkout">
                                                            <a className="_btn" style={{ textAlign: "center" }}>
                                                                Update Cart </a>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-4 _shippingsummary">
                                <div className="_activity-card-divider"></div>
                                <h4 className="_h4style">Order Summary</h4>
                                <figure className="ps-block__items">
                                    {cartItems &&
                                        cartItems.map(product => (
                                            <Link
                                                href="/"
                                                key={product.id}>
                                                <a>
                                                    <strong>
                                                        {
                                                            product.title
                                                        }
                                                        <span>
                                                            x
                                                                        {
                                                                product.quantity
                                                            }
                                                        </span>
                                                    </strong>
                                                    <small>
                                                        $
                                                                    {product.quantity *
                                                            product.price}
                                                    </small>
                                                </a>
                                            </Link>
                                        ))}
                                </figure>
                                <figure>
                                    <figcaption>

                                        <label htmlFor="keep-update">Shipping & Handling:</label>
                                        <small>$20.00</small>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <figcaption>
                                        <label htmlFor="keep-update">Total Before Tax:</label>
                                        <small>${amount}</small>
                                    </figcaption>
                                </figure>
                                <figure>
                                    <figcaption>
                                        <label htmlFor="keep-update">Estimated Tax to be collected:</label>
                                        <small>$98.00</small>
                                    </figcaption>
                                </figure>

                                <figure>
                                    <figcaption>
                                        <label htmlFor="keep-update">Total:</label>
                                        <small>${parseInt(amount) + 20 + 98}
                                                        .00</small>
                                    </figcaption>
                                </figure>
                                <figure >
                                    <div className="_form-group">
                                        <Input className="_form-control" type="text" placeholder="Enter Discount Code" style={{ width: "200px", height: "40px" }} />
                                        <a className="_group-card-btn _btn-secondary" href="" style={{ marginLeft: "7.5rem" }}>
                                            Apply
                                                    </a>
                                    </div>
                                </figure>
                                <div className="_activity-card-divider"></div>
                                <figure className="">
                                    <figcaption>
                                        <h4 >Order Total</h4>
                                        <strong>${parseInt(amount) + 20 + 98}
                                                        .00</strong>

                                    </figcaption>
                                </figure>
                                <br></br>

                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="_form-group">
                                            <Link href="/account/checkout">
                                                <a className="_btn">
                                                    Pay with Paypal
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="_form-group">
                                            <Link href="/account/checkout">
                                                <a className="_btncheckout">
                                                    Proceed to checkout </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ps-section__cart-actions">
                        <Link href="/shop">
                            <a>
                                <i className="icon-arrow-left mr-2"></i>
                                    Back to Shop
                                </a>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state.cart;
};
export default connect(mapStateToProps)(ShoppingCart);
