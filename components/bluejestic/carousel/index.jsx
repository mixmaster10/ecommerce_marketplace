import React from 'react';
import Slider from 'react-slick';

function Carousel({ children, slidesToScroll, slidesToShow }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow,
        slidesToScroll,
        arrows: false,
    };

    return (
        <div>
            <Slider className="_all-groups-slider" {...settings}>
                {children}
            </Slider>
        </div>
    );
}

export default Carousel;
