import React from 'react';

import DefaultDescription from './modules/description/DefaultDescription';
import ThumbnailOutOfStock from './modules/thumbnail/ThumbnailOutOfStock';
import InformationOutOfStock from './modules/information/InformationOutOfStock';

const ProductDetailOutOfStock = () => (
    <div className="ps-product--detail ps-product--fullwidth">
        <div className="ps-product__header">
            <ThumbnailOutOfStock />
            <InformationOutOfStock />
        </div>
        <DefaultDescription />
    </div>
);

export default ProductDetailOutOfStock;
