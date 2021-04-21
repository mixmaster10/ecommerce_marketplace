import React from 'react';
import Slider from 'react-slick';
import CategoryCard from './category-card';

function StoreCategories({ storeCategories }) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };

    return (
        <div className="___store-categories-pannel">
            <div className="___header">
                <h4>Store categories</h4>
                <a>See all</a>
            </div>
            <div className="___category-cards">
                <Slider className="___slider" {...settings}>
                    {storeCategories
                        ? storeCategories.map((category, i) => (
                              <CategoryCard key={i} category={category} />
                          ))
                        : null}
                </Slider>
            </div>
        </div>
    );
}

export default StoreCategories;
