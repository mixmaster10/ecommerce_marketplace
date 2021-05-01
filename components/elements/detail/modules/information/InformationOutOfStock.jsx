import React, { Component } from 'react';
import Rating from '../../../Rating';
class InformationOnSale extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ps-product__info">
                <h1>Magic Bullet NutriBullet Pro 900 Series Blender</h1>
                <div className="ps-product__meta">
                    <p>
                        Brand:<a href="shop-default.html">Sony</a>
                    </p>
                    <div className="ps-product__rating">
                        <Rating />
                        <span>(1 review)</span>
                    </div>
                </div>
                <h4 className="ps-product__price">$92.33</h4>
                <div className="ps-product__desc">
                    <p>
                        Sold By:
                        <a className="mr-20" href="shop-default.html">
                            <strong> Globle Office</strong>
                        </a>
                        Status:
                        <a href="shop-default.html">
                            <strong className="ps-tag--out-stock"> Out of stock</strong>
                        </a>
                    </p>
                    <ul className="ps-list--dot">
                        <li> Unrestrained and portable active stereo speaker</li>
                        <li> Free from the confines of wires and chords</li>
                        <li> 20 hours of portable capabilities</li>
                        <li> Double-ended Coil Cord with 3.5mm Stereo Plugs Included</li>
                        <li> 3/4″ Dome Tweeters: 2X and 4″ Woofer: 1X</li>
                    </ul>
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
                        <a href="#">Consumer Electronics</a>,<a href="#"> Refrigerator</a>,
                        <a href="#">Babies & Moms</a>
                    </p>
                    <p className="tags">
                        <strong> Tags</strong>
                        <a href="#">sofa</a>,<a href="#">technologies</a>,<a href="#">wireless</a>
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

export default InformationOnSale;
