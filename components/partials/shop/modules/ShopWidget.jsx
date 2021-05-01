import React, { Component } from 'react';
import Router from 'next/router';
import { connect } from 'react-redux';
import { Slider, Checkbox } from 'antd';

import {
    getProducts,
    getTotalProducts,
    getProductsByPrice,
    getBrands,
    getProductsByBrand,
    getProductCategories,
    getProductsByCategory,
} from '../../../../store/product/action';
class ShopWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            priceMin: 0,
            priceMax: 2000,
        };
    }

    handleChangeRange(value) {
        this.setState({
            priceMin: value[0],
            priceMax: value[1],
        });
        const params = {
            price_gt: value[0],
            price_lt: value[1],
            _start: 1,
            _limit: 999,
        };
        this.props.dispatch(getProductsByPrice(params));
    }

    handleFilterByBrand(value) {
        if (value.length > 0) {
            this.props.dispatch(getProductsByBrand(value));
            Router.push({ pathname: '/shop', query: { brand: value } });
        } else {
            const params = {
                _start: 1,
                _limit: 12,
            };
            this.props.dispatch(getProducts(params));
            this.props.dispatch(getTotalProducts());
        }
    }

    handleFilterProductsByCategory(e, slug) {
        e.preventDefault();
        if (slug !== null) {
            Router.push({ pathname: '/shop', query: { category: slug } });
            this.props.dispatch(getProductsByCategory(slug));
        } else {
            const params = {
                _start: 1,
                _limit: 12,
            };
            this.props.dispatch(getProducts(params));
            this.props.dispatch(getTotalProducts());
        }
    }

    componentDidMount() {
        this.props.dispatch(getBrands());
        this.props.dispatch(getProductCategories());
    }

    render() {
        const { brands, categories } = this.props;
        const brandsGroup = [];
        if (brands.length > 0) {
            brands.forEach(brand => {
                brandsGroup.push({
                    id: brand.id,
                    value: brand.id,
                    label: brand.name,
                });
            });
        }
        return (
            <div className="ps-layout__left">
                <aside className="widget widget_shop">
                    <h4 className="widget-title">Categories</h4>
                    {categories && categories.length > 0 ? (
                        <ul className="ps-list--categories">
                            <li>
                                <a
                                    href="/shop"
                                    onClick={e =>
                                        this.handleFilterProductsByCategory(
                                            e,
                                            null
                                        )
                                    }>
                                    All
                                </a>
                            </li>
                            {categories.map(category => (
                                <li key={category.id}>
                                    <a
                                        href={`shop?category=${category.slug}`}
                                        onClick={e =>
                                            this.handleFilterProductsByCategory(
                                                e,
                                                category.slug
                                            )
                                        }>
                                        {category.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        'No Category'
                    )}
                </aside>
                <aside className="widget widget_shop">
                    <h4 className="widget-title">By Brands</h4>
                    <figure>
                        <Checkbox.Group
                            options={brandsGroup}
                            onChange={this.handleFilterByBrand.bind(this)}
                        />
                    </figure>
                    <figure>
                        <h4 className="widget-title">By Price</h4>
                        <Slider
                            range
                            defaultValue={[0, 2000]}
                            max={2000}
                            onAfterChange={this.handleChangeRange.bind(this)}
                        />
                        <p>
                            Price: ${this.state.priceMin} - $
                            {this.state.priceMax}
                        </p>
                    </figure>
                </aside>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state.product;
};
export default connect(mapStateToProps)(ShopWidget);
