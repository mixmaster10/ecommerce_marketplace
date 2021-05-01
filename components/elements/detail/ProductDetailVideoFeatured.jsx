import React from 'react';
import DefaultDescription from './modules/description/DefaultDescription';
import InformationExtended from './modules/information/InformationExtended';
import ThumbnailVideoFeatured from './modules/thumbnail/ThumbnailVideoFeatured';
import {extended} from '../../../public/static/data/product'
const ProductDetailVideoFeatured = () => (
    <div className="ps-product--detail ps-product--fullwidth">
        <div className="ps-product__header">
            <ThumbnailVideoFeatured />
            <InformationExtended product={extended} />
        </div>
        <DefaultDescription />
    </div>
);

export default ProductDetailVideoFeatured;
