import React from 'react';
import InformationCountDown from './modules/information/InformationCountDown';
import ThumbnailCountDown from './modules/thumbnail/ThumbnailCountDown';
import DefaultDescription from './modules/description/DefaultDescription';
import { countdown } from '../../../public/static/data/product';

const ProductDetailCountdown = () => (
    <div className="ps-product--detail ps-product--fullwidth">
        <div className="ps-product__header">
            <ThumbnailCountDown product={countdown} />
            <InformationCountDown product={countdown} />
        </div>
        <DefaultDescription />
    </div>
);

export default ProductDetailCountdown;
