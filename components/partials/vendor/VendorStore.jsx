import React, { Component } from 'react';
import Slider from 'react-slick';
import { relatedProduct } from '../../../public/static/data/product';
import Product from '../../elements/products/Product';
import VendorProducts from './modules/VendorProducts';
import NextArrow from '../../elements/carousel/NextArrow';
import PrevArrow from '../../elements/carousel/PrevArrow';
import Rating from '../../elements/Rating';
import { carouselStandard } from '../../../utilities/carousel-helpers';
import ProductOffline from '../../elements/products/ProductOffline';

class VendorStore extends Component {
    render() {
        return (
            <div className="ps-vendor-store">
                <div className="container">
                    <div className="ps-section__container">
                        <div className="ps-section__left">
                            <div className="ps-block--vendor">
                                <div className="ps-block__thumbnail">
                                    <img
                                        src="/static/img/vendor/vendor-store.jpg"
                                        alt="martfury"
                                    />
                                </div>
                                <div className="ps-block__container">
                                    <div className="ps-block__header">
                                        <h4>Digitalworld us</h4>
                                        <Rating />
                                        <p>
                                            <strong>85% Positive</strong> (562
                                            rating)
                                        </p>
                                    </div>
                                    <div className="ps-block__divider"></div>
                                    <div className="ps-block__content">
                                        <p>
                                            <strong>Digiworld US</strong>, New
                                            York’s no.1 online retailer was
                                            established in May 2012 with the aim
                                            and vision to become the one-stop
                                            shop for retail in New York with
                                            implementation of best practices
                                            both online
                                        </p>
                                        <span className="ps-block__divider"></span>
                                        <p>
                                            <strong>Address</strong> 325 Orchard
                                            Str, New York, NY 10002
                                        </p>
                                        <figure>
                                            <figcaption>
                                                Foloow us on social
                                            </figcaption>
                                            <ul className="ps-list--social-color">
                                                <li>
                                                    <a
                                                        className="facebook"
                                                        href="#">
                                                        <i className="fa fa-facebook"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="twitter"
                                                        href="#">
                                                        <i className="fa fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="linkedin"
                                                        href="#">
                                                        <i className="fa fa-linkedin"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="feed"
                                                        href="#">
                                                        <i className="fa fa-feed"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </figure>
                                    </div>
                                    <div className="ps-block__footer">
                                        <p>
                                            Call us directly
                                            <strong>(+053) 77-637-3300</strong>
                                        </p>
                                        <p>or Or if you have any question</p>
                                        <a
                                            className="ps-btn ps-btn--fullwidth"
                                            href="">
                                            Contact Seller
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ps-section__right">
                            <div className="ps-block--vendor-filter">
                                <div className="ps-block__left">
                                    <ul>
                                        <li className="active">
                                            <a href="#">Products</a>
                                        </li>
                                        <li>
                                            <a href="#">Reviews</a>
                                        </li>
                                        <li>
                                            <a href="#">About</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="ps-block__right">
                                    <form
                                        className="ps-form--search"
                                        action="/"
                                        method="get">
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Search in this shop"
                                        />
                                        <button>
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="ps-vendor-best-seller">
                                <div className="ps-section__header">
                                    <h3>Best Seller items</h3>
                                    <div className="ps-section__nav">
                                        <a
                                            className="ps-carousel__prev"
                                            href="#vendor-bestseller">
                                            <i className="icon-chevron-left"></i>
                                        </a>
                                        <a
                                            className="ps-carousel__next"
                                            href="#vendor-bestseller">
                                            <i className="icon-chevron-right"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="ps-section__content">
                                    <Slider
                                        {...carouselStandard}
                                        className="ps-carousel">
                                        {relatedProduct &&
                                            relatedProduct.map((product) => (
                                                <ProductOffline
                                                    product={product}
                                                    key={product.id}
                                                />
                                            ))}
                                    </Slider>
                                </div>
                            </div>
                            <VendorProducts />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VendorStore;
