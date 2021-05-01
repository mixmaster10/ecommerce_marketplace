import React, { Component } from 'react';
import Link from 'next/link';
import { Tabs } from 'antd';
import Slider from 'react-slick';
import Product from '../../../../elements/products/Product';
import ProductHorizontal from '../../../../elements/products/ProductHorizontal';
import { carouselSingle } from '../../../../../utilities/carousel-helpers';
import { getColletionBySlug } from '../../../../../utilities/product-helper';
import { connect } from 'react-redux';

const { TabPane } = Tabs;

class Market3ConsumerElectronics extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { categories, collectionSlug } = this.props;
        const products = getColletionBySlug(categories, collectionSlug);
        return (
            <div className="ps-block--product-box">
                <div className="ps-block__header">
                    <h3>
                        <i className="icon-shirt"></i> Home, Garden & Kitchen
                    </h3>
                    <ul>
                        <li>
                            <Link href="/shop">
                                <a>Furniture</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop">
                                <a>Home Decor</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop">
                                <a>Cookware</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop">
                                <a>Utensil & Gadget</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop">
                                <a>Garden Tools</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="ps-block__content">
                    <div className="ps-block__left">
                        <Slider {...carouselSingle} className="ps-carousel">
                            <div className="item">
                                <Link href="/shop">
                                    <a>
                                        <img
                                            src="/static/img/promotions/home-5/clothing-1.jpg"
                                            alt="martfury"
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div className="item">
                                <Link href="/shop">
                                    <a>
                                        <img
                                            src="/static/img/promotions/home-5/clothing-2.jpg"
                                            alt="martfury"
                                        />
                                    </a>
                                </Link>
                            </div>
                        </Slider>
                        <div className="ps-block__products">
                            <Tabs defaultActiveKey="1">
                                <TabPane tab="New Arrivals" key="1">
                                    <div className="row">
                                        {products.map((product, index) => {
                                            if (index < 4) {
                                                return (
                                                    <div
                                                        className="col-md-3 col-sm-4 col-6"
                                                        key={product.id}>
                                                        <Product
                                                            product={product}
                                                        />
                                                    </div>
                                                );
                                            }
                                        })}
                                    </div>
                                </TabPane>
                                <TabPane tab="Best Seller" key="2">
                                    <div className="row">
                                        {products.map((product, index) => {
                                            if (index > 1 && index < 6) {
                                                return (
                                                    <div
                                                        className="col-md-3 col-sm-4 col-6"
                                                        key={product.id}>
                                                        <Product
                                                            product={product}
                                                        />
                                                    </div>
                                                );
                                            }
                                        })}
                                    </div>
                                </TabPane>
                                <TabPane tab="Sale" key="3">
                                    <div className="row">
                                        {products.map((product, index) => {
                                            if (index > 0 && index < 5) {
                                                return (
                                                    <div
                                                        className="col-md-3 col-sm-4 col-6"
                                                        key={product.id}>
                                                        <Product
                                                            product={product}
                                                        />
                                                    </div>
                                                );
                                            }
                                        })}
                                    </div>
                                </TabPane>
                            </Tabs>
                        </div>
                    </div>
                    <div className="ps-block__right">
                        <figure>
                            <figcaption>Recommended For You</figcaption>
                            {products.map((product, index) => {
                                if (index < 5) {
                                    return (
                                        <ProductHorizontal
                                            product={product}
                                            key={product.id}
                                        />
                                    );
                                }
                            })}
                        </figure>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(state => state.collection)(Market3ConsumerElectronics);
