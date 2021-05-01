import React from 'react';
import ThumbnailExtended from './modules/thumbnail/ThumbnailExtended';
import DefaultDescription from './modules/description/DefaultDescription';
import InformationExtended from './modules/information/InformationExtended';
import { extended } from '../../../public/static/data/product';

const ProductDetailCountdown = () => (
    <div className="ps-product--detail">
        <div className="ps-product__header">
            <ThumbnailExtended product={extended} />
            <InformationExtended product={extended} />
        </div>
        <DefaultDescription />
    </div>
);

export default ProductDetailCountdown;
