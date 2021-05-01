import React, { Component } from 'react';
import Link from 'next/link';
import { sameBrands } from '../../../public/static/data/product';
import Product from '../../../components/elements/products/Product';
import { connect } from 'react-redux';
import { getColletionBySlug } from '../../../utilities/product-helper';
class ProductWidgets extends Component{

    render() {
        const { collections, collectionSlug } = this.props;
        const products = getColletionBySlug(collections, collectionSlug);
        return (
            <section>
                <aside className="widget widget_product widget_features">
                    <p>
                        <i className="icon-network"></i> Shipping worldwide
                    </p>
                    <p>
                        <i className="icon-3d-rotate"></i> Free 7-day return if
                        eligible, so easy
                    </p>
                    <p>
                        <i className="icon-receipt"></i> Supplier give bills for this
                        product.
                    </p>
                    <p>
                        <i className="icon-credit-card"></i> Pay online or when
                        receiving goods
                    </p>
                </aside>
                <aside className="widget widget_sell-on-site">
                    <p>
                        <i className="icon-store"></i> Sell on Martfury?
                        <Link href="/account/register">
                            <a> Register Now !</a>
                        </Link>
                    </p>
                </aside>
                <aside className="widget widget_ads">
                    <Link href="/shop">
                        <a>
                            <img src="/static/img/ads/product-ads.png" alt="martfury" />
                        </a>
                    </Link>
                </aside>
                <aside className="widget widget_same-brand">
                    <h3>Same Brand</h3>
                    <div className="widget__content">
                        {products &&
                        products.map(product => (
                            <Product product={product} key={product.id} />
                        ))}
                    </div>
                </aside>
            </section>
        );
    }

}

export default connect(state=>state.collection)(ProductWidgets);
