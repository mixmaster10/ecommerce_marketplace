import React from 'react';
import Slider from 'react-slick';
import CategoriesSingle from './CategoriesSingle';


const StoreCategories = (props) => {

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 750,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        centerMode: true,
    };


    return (
        <div className="store-categories-wrapper">
            <div className="title-wrapper">
                <div>
                    <h5>Store categories</h5>
                    <p>Browse for store by catogories</p>
                </div>
                <div>
                    <a href="#">
                    See all
                    </a>
                </div>
            </div>
            <div className="store-categories-inner-wrapper">
                <Slider {...settings} className="owl-carousel">
                    <div className="item">
                        <CategoriesSingle 
                        name="Fashion" 
                        image="/static/img/stores/category-01.png" 
                        color="#8797D5" 
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Nullam et erat at elit mollis tempor." />
                    </div>
                    <div className="item">
                        <CategoriesSingle 
                        name="Electronics" 
                        image="/static/img/stores/category-02.png" 
                        color="#1079C5" 
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Nullam et erat at elit mollis tempor." />
                    </div>
                    <div className="item">
                        <CategoriesSingle 
                        name="Art" 
                        image="/static/img/stores/category-03.png" 
                        color="rgba(31, 98, 58, 0.75)" 
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Nullam et erat at elit mollis tempor." />
                    </div>
                    <div className="item">
                        <CategoriesSingle 
                        name="Home Decor" 
                        image="/static/img/stores/category-04.png" 
                        color="rgba(52, 84, 106, 0.5)" 
                        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Nullam et erat at elit mollis tempor." />
                    </div>
                </Slider>
            </div>
        </div>
    );
};


export default StoreCategories;
