import React from 'react';

import DefaultDescription from './modules/description/DefaultDescription';
import ThumbnailGroupped from './modules/thumbnail/ThumbnailGroupped';
import InformationGroupped from './modules/information/InformationGroupped';
import { gropped } from '../../../public/static/data/product';

const ProductDetailGroupped = () => (
    <div className="ps-product--detail ps-product--fullwidth">
        <div className="ps-product__header">
            <ThumbnailGroupped product={gropped} />
            <InformationGroupped product={gropped} />
        </div>
        <DefaultDescription />
    </div>
);

export default ProductDetailGroupped;
