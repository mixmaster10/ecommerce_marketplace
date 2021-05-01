import React from 'react';

/*
    PROPS EXPECTS:
    {
        product: {
            image: string (optional)
            thumbnail: string (optional)
            (can pass just image, or just thumbnail)
        }
    }
    SCSS PATH:
    /scss/bluejesticBootstrap/___components/aboutStoreDataCarouselitem.scss
*/

function AboutStoreDataCarouselItem({ product }) {
    return (
        <div className="___about-store-data-carousel-item">
            <img
                src={
                    product?.image
                        ? product.image
                        : product?.thumbnail
                        ? product.thumbnail
                        : null
                }
            />
            <div className="buttons">
                <a href="">Comments</a>
                <a href="">Share</a>
                <a href="">Like</a>
            </div>
        </div>
    );
}

export default AboutStoreDataCarouselItem;
