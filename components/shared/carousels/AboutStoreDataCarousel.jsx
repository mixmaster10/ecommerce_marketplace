import React from 'react';
import Slider from 'react-slick';
import AboutStoreDataCarouselItem from '../items/AboutStoreDataCarouselItem';

/*
    PROPS EXPECTS:
    {
        title: string,
        data: [
            {
                image: string (optional)
                thumbnail: string (optional)
                (can pass just image, or just thumbnail)
            }
        ]
    }
    REQUIRES:
    Slider from 'react-slick'
    AboutStoreDataCarouselItem from '/components/shared/items/AboutStoreDataCarouselItem.jsx'
    SCSS PATH:
    /scss/bluejesticBootstrap/___components/aboutStoreDataCarousel.scss
*/

function AboutStoreDataCarousel({ title = 'title', data = [] }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };

    return (
        <div className="___seller-data-carousel">
            <div className="title">
                <h5>{title}</h5>
                <a href="">See all</a>
            </div>
            <div>
                <Slider className="slider" {...settings}>
                    {data
                        ? data.map((product, i) => (
                              <AboutStoreDataCarouselItem
                                  key={i}
                                  product={product}
                              />
                          ))
                        : null}
                </Slider>
            </div>
        </div>
    );
}

export default AboutStoreDataCarousel;
