import React, { Component } from 'react';
import Link from 'next/link';
import { Rate } from 'antd';
import { connect } from 'react-redux';
import Rating from '../Rating';
import { formatCurrency } from '../../../utilities/product-helper';
import { isStaticData } from '../../../utilities/app-settings';
import { baseUrl } from '../../../repositories/Repository';

class ProductResult extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { product, currency } = this.props;

        return (
            <div className="ps-product ps-product--wide ps-product--search-result">
                <div className="ps-product__thumbnail">
                    <Link href="/product/[pid]" as={`/product/${product.id}`}>
                        <a>
                            <img src={isStaticData === true ? product.thumbnail.url : `${baseUrl}${product.thumbnail.url}`} alt="martfury" />
                        </a>
                    </Link>
                </div>
                <div className="ps-product__content">
                    <Link href="/product/[pid]" as={`/product/${product.id}`}>
                        <a className="ps-product__title">{product.title}</a>
                    </Link>
                    <div className="ps-product__rating">
                        <Rating />
                        <span>{product.ratingCount}</span>
                    </div>
                    {product.is_sale === true ? (
                        <p className="ps-product__price sale">
                            {currency ? currency.symbol : '$'}
                            {formatCurrency(product.price)}
                            <del className="ml-1">
                                {currency ? currency.symbol : '$'}
                                {formatCurrency(product.sale_price)}
                            </del>
                        </p>
                    ) : (
                        <p className="ps-product__price">
                            {currency ? currency.symbol : '$'}
                            {formatCurrency(product.price)}
                        </p>
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state.setting;
};
export default connect(mapStateToProps)(ProductResult);
