import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { getCart, removeItem } from '../../../../store/cart/action';
import { isStaticData } from '../../../../utilities/app-settings';
import { baseUrl } from '../../../../repositories/Repository';
class MiniCart extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getCart());
    }

    handleRemoveCartItem = (product) => {
        this.props.dispatch(removeItem(product));
    };

    render() {
        const { amount, cartTotal, cartItems } = this.props;
        return (
            <div className="ps-cart--mini">
                <a className="header__extra" href="#">
                    <img
                        src="/static/img/icons/cart.svg"
                        style={{color: 'white',
                                height: '25px'}}>

                    </img>
                    <span>
                        <i>{cartTotal ? cartTotal : 0}</i>
                    </span>
                </a>
                {cartItems && cartItems.length > 0 ? (
                    <div className="ps-cart__content">
                        <div className="ps-cart__items">
                            {cartItems && cartItems.length > 0
                                ? cartItems.map((product) => (
                                      <div
                                          className="ps-product--cart-mobile"
                                          key={product.id}>
                                          <div className="ps-product__thumbnail">
                                              <Link
                                                  href="/product/[pid]"
                                                  as={`/product/${product.id}`}>
                                                  <a>
                                                      <img
                                                          src={
                                                              isStaticData ===
                                                              false
                                                                  ? `${baseUrl}${product.thumbnail.url}`
                                                                  : product
                                                                        .thumbnail
                                                                        .url
                                                          }
                                                          alt="martfury"
                                                      />
                                                  </a>
                                              </Link>
                                          </div>
                                          <div className="ps-product__content">
                                              <a
                                                  className="ps-product__remove"
                                                  onClick={this.handleRemoveCartItem.bind(
                                                      this,
                                                      product
                                                  )}>
                                                  <i className="icon-cross"></i>
                                              </a>
                                              <Link
                                                  href="/product/[pid]"
                                                  as={`/product/${product.id}`}>
                                                  <a className="ps-product__title">
                                                      {product.title}
                                                  </a>
                                              </Link>
                                              <p>
                                                  <strong>Sold by:</strong>{' '}
                                                  {product.vendor}
                                              </p>
                                              <small>
                                                  {product.quantity} x $
                                                  {product.price}
                                              </small>
                                          </div>
                                      </div>
                                  ))
                                : ''}
                        </div>
                        <div className="ps-cart__footer">
                            <h3>
                                Sub Total:
                                <strong>${amount ? amount : 0}</strong>
                            </h3>
                            <figure>
                                <Link href="/account/shopping-cart">
                                    <a className="ps-btn">View Cart</a>
                                </Link>
                                <Link href="/account/checkout">
                                    <a className="ps-btn">Checkout</a>
                                </Link>
                            </figure>
                        </div>
                    </div>
                ) : (
                    <div className="ps-cart__content">
                        <div className="ps-cart__items">
                            <span>No products in cart</span>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return state.cart;
};
export default connect(mapStateToProps)(MiniCart);
