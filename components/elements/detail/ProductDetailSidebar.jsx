import React from 'react';

import DefaultDescription from './modules/description/DefaultDescription';
import ThumbnailSidebar from './modules/thumbnail/ThumbnailSidebar';
import InformationSidebar from './modules/information/InformationSidebar';
import { extended } from '../../../public/static/data/product';

const ProductDetailSidebar = () => (
    <div className="ps-product--detail ps-product--fullwidth">
        <div className="ps-product__header">
            <ThumbnailSidebar product={extended} />
            <InformationSidebar product={extended}/>
        </div>
        <DefaultDescription />
    </div>
);

export default ProductDetailSidebar;
