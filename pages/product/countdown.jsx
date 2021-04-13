import React from 'react';

import FooterDefault from '../../components/shared/footers/FooterDefault';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import Newletters from '../../components/partials/commons/Newletters';
import CustomerBought from '../../components/partials/product/CustomerBought';
import RelatedProduct from '../../components/partials/product/RelatedProduct';
import BreadCrumb from '../../components/elements/BreadCrumb';
import ProductDetailCountdown from '../../components/elements/detail/ProductDetailCountdown';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import ProductWidgets from '../../components/partials/product/ProductWidgets';

const ProductCountdownPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Garden & Kitchen',
            url: '/shop',
        },
        {
            text: 'Furniture',
            url: '/shop',
        },
        {
            text: 'Korea Long Sofa Fabric In Blue Navy Color',
        },
    ];

    return (
        <div className="layout--product">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
            <div className="ps-page--product">
                <div className="ps-container">
                    <div className="ps-page__container">
                        <div className="ps-page__left">
                            <ProductDetailCountdown />
                        </div>
                        <div className="ps-page__right">
                            <ProductWidgets collectionSlug="widget_same_brand" />
                        </div>
                    </div>
                    <CustomerBought collectionSlug="customer_bought" />
                    <RelatedProduct collectionSlug="shop-recommend-items" />
                </div>
            </div>
            <Newletters />
            <FooterDefault />
        </div>
    );
};

export default ProductCountdownPage;
