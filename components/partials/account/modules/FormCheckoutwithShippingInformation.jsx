import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import ProductCart from '../../../elements/products/ProductCart';

import { Form, Input } from 'antd';
import { connect } from 'react-redux';


import {
    getCart,
    increaseItemQty,
    decreaseItemQty,
    removeItem
} from '../../../../store/cart/action';



class FormCheckoutwithShippingInformation extends Component {
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
    handleLoginSubmit = () => {
        // Router.push('/account/shipping');
    };

    render() {
        const { amount, cartItems, cartTotal } = this.props;
        const h4style = {
            marginTop: "0.7em",
            fontWeight: "600",
            fontSize: "14px"
        }
        let currentCartItems = [];
        if (cartItems && cartItems.length > 0) {
            currentCartItems = cartItems;
            //currentGroupItems = cartGroupItems;

        }
        return (
            <Form onFinish={this.handleLoginSubmit}>
                <div className="_shippingContent">
                    <div className="row">
                        <div className="col-sm-6">
                            <h4 className="_h4style"> Checkout ( Items)</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                            <div className="_shippinginfo">
                                <div className="_ps-block__panel">
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="_col-sm-1--checkout">
                                                <h4 className="_h4style">1</h4>
                                            </div>
                                            <div className="col-sm-10">
                                                <h4 className="_h4style">Shipping Information</h4>
                                            </div>
                                            <div className="col-sm-1">
                                                <figure>
                                                    <Link href="/account/checkout">
                                                        <a>Change</a>
                                                    </Link>
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <figure>
                                                    <small>Your Name</small>
                                                </figure>
                                                <figure>
                                                    <small>123 Address </small>
                                                </figure>
                                                <figure>
                                                    <small>City,State, 12345 </small>
                                                </figure>
                                                <div className="_activity-card-divider"></div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="_col-sm-1--checkout">
                                                <h4 className="_h4style">2</h4>
                                            </div>
                                            <div className="col-sm-10">
                                                <h4 className="_h4style">Payment Information</h4>
                                            </div>
                                            <div className="col-sm-1">
                                                <figure>
                                                    <Link href="/account/checkout">
                                                        <a>Change</a>
                                                    </Link>
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <figure>
                                                    <small>Visa Ending in 1234</small>
                                                </figure>
                                                <figure>
                                                    <small>Billing Address : 123 Address Drive </small>
                                                </figure>
                                                <figure>
                                                    <small>Add a gift card or voucher </small>
                                                </figure>
                                                <div className="_activity-card-divider"></div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="_col-sm-1--checkout">
                                                <h4 className="_h4style">3</h4>
                                            </div>
                                            <div className="col-sm-10">
                                                <h4 className="_h4style">Review Items & Shipping Information</h4>
                                            </div>
                                            <div className="col-sm-1">
                                                <figure>
                                                    <Link href="/account/checkout">
                                                        <a>Change</a>
                                                    </Link>
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="table-responsive">
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
                                                </div>
                                                <div className="_activity-card-divider"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ps-form__submit">
                                        <Link href="/account/shopping-cart">
                                            <a>
                                                <i className="icon-arrow-left mr-2"></i>
                                            Return to shopping cart
                                        </a>
                                        </Link>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 _shippingsummary">
                            <div className="_activity-card-divider"></div>
                            <h4 style={h4style}>Order Summary</h4>
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

                                    <label htmlFor="keep-update">Shipping & Handling</label>
                                    <small>$20.00</small>
                                </figcaption>
                            </figure>
                            <figure>
                                <figcaption>
                                    <label htmlFor="keep-update">Total Before Tax</label>
                                    <small>${amount}</small>
                                </figcaption>
                            </figure>
                            <figure>
                                <figcaption>
                                    <label htmlFor="keep-update">Estimated Tax to be collected</label>
                                    <small>$98.00</small>
                                </figcaption>
                            </figure>

                            <figure>
                                <figcaption>
                                    <label htmlFor="keep-update">Total</label>
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
                                    <h4 >Order Total:</h4>
                                    <strong>${parseInt(amount) + 20 + 98}
                                                        .00</strong>

                                </figcaption>
                            </figure>
                            <br></br>
                            <div className="row">
                                <div className="col-sm-10">
                                    <figure>
                                        <small>By Placing your order you are agreeing to Bluejestic Inc's</small>
                                    </figure>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-11 _checkoutinfo">
                                    <figure>
                                        <Link href="/account/checkout">
                                            <a >   Privacy and Conditions of use</a>
                                        </Link>
                                    </figure>
                                    <div className="col-sm-1">
                                    </div>
                                    <br></br>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-3">
                                </div>
                                <div className="col-sm-6">
                                    <div className="_form-group">
                                        <Link href="/account/checkout">
                                            <a className="_btncheckout">
                                                Place Your Order</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        );
    }
}
const mapStateToProps = state => {
    return state.cart;
};
export default connect(mapStateToProps)(FormCheckoutwithShippingInformation);
