import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCart } from '../../../store/cart/action';

import Link from 'next/link';
import { Input } from 'antd';


class Shipping extends Component {
    constructor(props) {
        super(props);


        this.state = {

            errors: {
                cardnumber: '',
                productsoldout: ''
            }
        }

    }

    componentDidMount() {
        this.props.dispatch(getCart());
    }
    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'cardnumber':
                errors.cardnumber =
                    value.length < 16
                        ? 'Invalid Card Number!'
                        : '';
                break;
            case 'email':
                errors.email =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid!';
                break;
            case 'productsoldout':
                errors.productsoldout =
                    value.length <= 0
                        ? 'Unfortunately, the product you are trying to purchasehas been sold out!'
                        : '';
                break;
            default:
                break;
        }

        this.setState({ errors, [name]: value });
    }
    render() {
        const { amount, cartItems } = this.props;
        const { errors } = this.state;
        const h4style = {
            marginTop: "0.7em",
            fontWeight: "600",
            fontSize: "14px"
        }
        const inputtextstyle = {
            height: "40px",
            marginTop: "1.3em"
        }


        return (

            <div className="_shipping" >
                <div className="container" >
                    <div className="_shippingContent">
                        <div className="row">
                            <div className="col-xl-8">
                                <div className="_shippinginfo">
                                    {errors.productsoldout.length > 0 &&
                                        <span className='_error'>{errors.productsoldout}</span>}
                                    <div className="_ps-block__panel">
                                        <h4 className="_h4style">Shipping Information</h4>
                                        <figure>
                                            <small>Your Name</small>
                                            <Link href="/account/checkout">
                                                <a>Change</a>
                                            </Link>
                                        </figure>
                                        <figure>
                                            <small>123 Address Drive </small>
                                        </figure>
                                        <figure>
                                            <small>City,State, 12345 </small>
                                        </figure>
                                        <h4 className="_h4style">Shipping Options</h4>
                                        <figure>
                                            <div className="ps-checkbox">
                                                <input className="form-control" type="checkbox" id="keep-update" />
                                                <label htmlFor="keep-update">Standard Shipping</label>
                                            </div>
                                        </figure>
                                        <figure>
                                            <div className="ps-checkbox">
                                                <input className="form-control" type="checkbox" id="keep-update" />
                                                <label htmlFor="keep-update">Express Shipping</label>
                                            </div>
                                        </figure>
                                        <figure>
                                            <div className="ps-checkbox">
                                                <input className="form-control" type="checkbox" id="keep-update" />
                                                <label htmlFor="keep-update">1-2day Shipping</label>
                                            </div>
                                        </figure>
                                        <h4 className="_h4style">Payment</h4>
                                        <h4 className="_h4style">Billing Address</h4>
                                        <figure>
                                            <small>Your Name</small>
                                            <Link href="/account/checkout">
                                                <a>Change</a>
                                            </Link>
                                        </figure>
                                        <figure>
                                            <small>123 Address Drive </small>
                                        </figure>
                                        <figure>
                                            <small>City,State, 12345 </small>
                                        </figure>
                                        <h4 className="_h4style">Add Payment</h4>

                                        <div className="_form-group">
                                            <Input className="_form-control" type="text" placeholder="Name on card" style={{ height: "40px" }} />
                                            <Input className="_form-control" type="number" id="cardnumber" name="cardnumber" placeholder="Card Number" style={inputtextstyle}
                                                onChange={this.handleChange} />
                                            {errors.cardnumber.length > 0 &&
                                                <span className='_error'>{errors.cardnumber}</span>}
                                             <div className="row">
                                                <Input className="_form-control _cardmmv" type="number" placeholder="MM V" ></Input>   
                                                 <Input className="_form-control _cardmmv" type="number" placeholder="YYYY V" />
                                            </div>
                                            <div className="row">
                                            <Input className="_form-control _cardmmv" type="password" placeholder="CVV"  />
                                            </div>
                                            <div className="_group-card-btn-container" >
                                                <button className="_btn" >
                                                    Place Your Order
                                                    </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ps-block__footer">
                                        <Link href="/account/checkout">
                                            <a>
                                                <i className="icon-arrow-left mr-2"></i>
                                                Return to information
                                            </a>
                                        </Link>
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
                                    <img
                                        className="_checkout-avatar"

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
                                <figure>
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
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return state.cart;
};
export default connect(mapStateToProps)(Shipping);
