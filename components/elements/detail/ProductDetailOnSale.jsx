import React from 'react';

import DefaultDescription from './modules/description/DefaultDescription';
import ThumbnailOnSale from './modules/thumbnail/ThumbnailOnSale';
import InformationOnSale from './modules/information/InformationOnSale';
import { extended } from '../../../public/static/data/product';

const ProductDetailOnSale = () => (
    <div className="ps-product--detail ps-product--fullwidth">
        <div className="ps-product__header">
            <ThumbnailOnSale product={extended} />
            <InformationOnSale product={extended} />
        </div>
        <DefaultDescription />
    </div>
);

export default ProductDetailOnSale;
