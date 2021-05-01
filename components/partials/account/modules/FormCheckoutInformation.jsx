import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';

import { Form, Input } from 'antd';

class FormCheckoutInformation extends Component {
    constructor(props) {
        super(props);
    }

    handleLoginSubmit = () => {
        Router.push('/account/shipping');
    };

    render() {
        const { amount, cartItems, cartTotal } = this.props;

        return (
            <Form onFinish={this.handleLoginSubmit}>
                <div className="_shippingContent">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                            <div className="_shippinginfo">
                                <div className="_ps-block__panel">
                                    <div className="row">
                                        <div className="col-sm-8">
                                            <div className="_form-group">
                                                <h4 className="_h4style">Contact Information</h4>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="_form-group">
                                                <label >Have an account?</label>
                                                <Link href="/account/checkout">
                                                    <a>Login</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="_form-group">
                                        <Form.Item
                                            // label="Name"
                                            name="name"
                                            rules={[
                                                {
                                                    required: false,
                                                    message:
                                                        'Enter an email or mobile phone number!',
                                                },
                                            ]}>
                                            <Input
                                                className="form-control"
                                                type="text"
                                                placeholder="Email or phone number"
                                            />
                                        </Form.Item>
                                    </div>
                                    <h4 className="_h4style">Shipping Information</h4>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="_form-group">
                                                <Form.Item
                                                    name="firstName"
                                                    rules={[
                                                        {
                                                            required: false,
                                                            message:
                                                                'Enter your first name!',
                                                        },
                                                    ]}>
                                                    <Input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="First Name"
                                                    />
                                                </Form.Item>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="_form-group">
                                                <Form.Item
                                                    name="lastName"
                                                    rules={[
                                                        {
                                                            required: false,
                                                            message:
                                                                'Enter your last name!',
                                                        },
                                                    ]}>
                                                    <Input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="Last Name"
                                                    />
                                                </Form.Item>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="_form-group">
                                        <Form.Item
                                            name="address"
                                            rules={[
                                                {
                                                    required: false,
                                                    message: 'Enter an address!',
                                                },
                                            ]}>
                                            <Input
                                                className="form-control"
                                                type="text"
                                                placeholder="Address"
                                            />
                                        </Form.Item>
                                    </div>
                                    <div className="_form-group">
                                        <Form.Item
                                            name="apartment"
                                            rules={[
                                                {
                                                    required: false,
                                                    message: 'Enter an Apartment!'

                                                },
                                            ]}>
                                            <Input
                                                className="form-control"
                                                type="text"
                                                placeholder="Apartment, suite, etc. (optional)"
                                            />
                                        </Form.Item>
                                    </div>
                                    <div className="_form-group">
                                        <Form.Item
                                            name="city"
                                            rules={[
                                                {
                                                    required: false,
                                                    message: 'Enter an city!'

                                                },
                                            ]}>
                                            <Input
                                                className="form-control"
                                                type="text"
                                                placeholder="City"
                                            />
                                        </Form.Item>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <div className="_form-group">
                                                <Form.Item
                                                    name="country"
                                                    rules={[
                                                        {
                                                            required: false,
                                                            message: 'Enter Country!',
                                                        },
                                                    ]}>
                                                    <Input
                                                        className="form-control"
                                                        type="country"
                                                        placeholder="Country"
                                                    />
                                                </Form.Item>

                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="_form-group">
                                                <Form.Item
                                                    name="state"
                                                    rules={[
                                                        {
                                                            required: false,
                                                            message: 'Enter a State!',
                                                        },
                                                    ]}>
                                                    <Input
                                                        className="form-control"
                                                        type="state"
                                                        placeholder="State"
                                                    />
                                                </Form.Item>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="_form-group">
                                                <Form.Item
                                                    name="postalCode"
                                                    rules={[
                                                        {
                                                            required: false,
                                                            message: 'Enter a postal code!',
                                                        },
                                                    ]}>
                                                    <Input
                                                        className="form-control"
                                                        type="postalCode"
                                                        placeholder="Postal Code"
                                                    />
                                                </Form.Item>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="_form-group">
                                        <Form.Item
                                            name="phone"
                                            rules={[
                                                {
                                                    required: false,
                                                    message: 'Enter phone number!',
                                                },
                                            ]}>
                                            <Input
                                                className="form-control"
                                                type="text"
                                                placeholder="Phone"
                                            />
                                        </Form.Item>
                                    </div>
                                    {/* <div className="form-group">
                                    <div className="ps-checkbox">
                                        <input
                                            className="form-control"
                                            type="checkbox"
                                            id="keep-update"
                                        />
                                        <label htmlFor="keep-update">
                                            Save this information for next time
                                        </label>
                                    </div>
                                </div> */}
                                    <div className="_group-card-btn-container" >
                                        <button className="_btn"  >
                                            Proceed to Payment
                                                    </button>
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
                            <div className="_shippinginfo">
                                <figure>
                                    <small></small>
                                    <Link href="/account/checkout">
                                        <a>Return to Cart</a>
                                    </Link>
                                </figure>
                                
                            </div>
                            <div className="_activity-card-main">
                                <img className="_checkout-avatar"
                                    src="http://45.76.97.89:3000/uploads/4c07bca3f13444688823a1c099410884.jpg"
                                    alt="avatar image"
                                />
                                <p className="_activity-card-description">
                                    Apple Head Phone
                                             </p>
                            </div>
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
                        </div>
                        {/* <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12  ps-block--checkout-order">
                            <div className="ps-form__orders">
                                <h3>Your order</h3>
                                <div className="ps-block--checkout-order">
                                    <div className="ps-block__content">
                                        <figure>
                                            <figcaption>
                                                <strong>Product</strong>
                                                <strong>total</strong>
                                            </figcaption>
                                        </figure>
                                        <figure className="ps-block__items">
                                            {cartItems &&
                                            cartItems.map(product => (
                                                <Link
                                                    href="/"
                                                    key={product.id}>
                                                    <a>
                                                        <strong>
                                                            {product.title}
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
                                                <strong>Subtotal</strong>
                                                <small>${amount}</small>
                                            </figcaption>
                                        </figure>
                                        <figure className="ps-block__shipping">
                                            <h3>Shipping</h3>
                                            <p>Calculated at next step</p>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </Form>
        );
    }
}

export default FormCheckoutInformation;
