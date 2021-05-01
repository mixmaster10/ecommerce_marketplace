import React from 'react';
import ThumbnailBox from './modules/thumbnail/ThumbnailBox';
import InformationBox from './modules/information/InformationBox';
import DescriptionBox from './modules/description/DescriptionBox';
import Product from '../products/Product';

import { sample } from '../../../public/static/data/product';

const ProductDetailBox = () => (
    <div className="ps-product--detail ps-product--box">
        <div className="ps-product__header ps-product__box">
            <ThumbnailBox product={sample} />
            <InformationBox product={sample} />
        </div>
        <div className="ps-product__content">
            <div className="row">
                <div className="col-xl-9">
                    <DescriptionBox />
                </div>
                <div className="col-xl-3">
                    <div className="ps-product__box">
                        <aside className="widget widget_same-brand">
                            <h3>Same Brand</h3>
                            <div className="widget__content">
                                {/* {products.map((product, index) => {
                                    if (index > 4 && index < 7) {
                                        return (
                                            <Product
                                                product={product}
                                                key={product.id}
                                            />
                                        );
                                    }
                                })}*/}
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default ProductDetailBox;
