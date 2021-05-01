import React, { Component } from 'react';
import Product from '../../elements/products/Product';
import ProductWide from '../../elements/products/ProductWide';
import ShopWidget from './modules/ShopWidget';
import ShopSidebarBanner from './ShopSidebarBanner';
import ShopSidebarBestSeller from './modules/ShopSidebarBestSeller';
import { getProducts } from '../../../store/product/action';
import { Pagination } from 'antd';
import { connect } from 'react-redux';
class LayoutShopSidebar extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        listView: true,
    };

    handleChangeViewMode = event => {
        event.preventDefault();
        this.setState({ listView: !this.state.listView });
    };

    handlePagination(page, pageSize) {
        const params = {
            _start: page === 1 ? 0 : page * pageSize,
            _limit: pageSize,
        };
        this.props.dispatch(getProducts(params));
    }

    render() {
        const products = this.props.allProducts;
        const total = this.props.totalProducts;
        const viewMode = this.state.listView;
        return (
            <div className="ps-shopping">
                <div className="ps-shopping__header">
                    <p>
                        <strong className="mr-2">{total}</strong>
                        Products found
                    </p>
                    <div className="ps-shopping__actions">
                        <select
                            className="ps-select form-control"
                            data-placeholder="Sort Items">
                            <option>Sort by latest</option>
                            <option>Sort by popularity</option>
                            <option>Sort by average rating</option>
                            <option>Sort by price: low to high</option>
                            <option>Sort by price: high to low</option>
                        </select>
                        <div className="ps-shopping__view">
                            <p>View</p>
                            <ul className="ps-tab-list">
                                <li
                                    className={
                                        viewMode === true ? 'active' : ''
                                    }>
                                    <a
                                        href="#"
                                        onClick={this.handleChangeViewMode}>
                                        <i className="icon-grid"></i>
                                    </a>
                                </li>
                                <li
                                    className={
                                        viewMode !== true ? 'active' : ''
                                    }>
                                    <a
                                        href="#"
                                        onClick={this.handleChangeViewMode}>
                                        <i className="icon-list4"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="ps-shopping__content">
                    {viewMode === true ? (
                        <div className="ps-shopping-product">
                            <div className="row">
                                {products && products.length > 0
                                    ? products.map(item => (
                                          <div
                                              className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6"
                                              key={item.id}>
                                              <Product product={item} />
                                          </div>
                                      ))
                                    : ''}
                            </div>
                        </div>
                    ) : (
                        <div className="ps-shopping-product">
                            {products && products.length > 0
                                ? products.map(item => (
                                      <ProductWide
                                          product={item}
                                          key={item.id}
                                      />
                                  ))
                                : ''}
                        </div>
                    )}
                </div>
                <div className="ps-shopping__footer text-center pt-40">
                    <Pagination
                        total={total - 1}
                        pageSize={12}
                        responsive={true}
                        defaultCurrent={1}
                        onChange={this.handlePagination.bind(this)}
                    />
                </div>
            </div>
        );
    }
}

export default connect(state => state.product)(LayoutShopSidebar);
