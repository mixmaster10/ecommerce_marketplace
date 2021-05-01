import React from 'react';
import AlexHeader from '../../components/shared/headers/AlexHeader';
import ProductCategories from './ProductCategories';
import ProductCategorySlider from './ProductCategorySlider';
import ProductCover from './ProductCover';
import ProductFilters from './ProductFilters';
import ProductListing from './ProductListing';

const ListProduct = (props) => {
    return (
        <div>
            <AlexHeader />
            <div className="list-product-wrapper">
                <div className="white-space"></div>
                <div>
                    <ProductCover />
                    <div className="list-product-main-wrapper">
                        <div className="list-product-left-sidebar">
                            <ProductCategories />
                            <ProductFilters />
                        </div>
                        <div className="list-product-inner-wrapper">
                            <ProductCategorySlider />
                            <ProductListing />
                        </div>
                    </div>
                </div>
                <div className="white-space"></div>
            </div>
        </div>
    );
};

export default ListProduct;
