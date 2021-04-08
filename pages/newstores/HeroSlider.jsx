import React from 'react';
import Slider from 'react-slick';


const HeroSlider = (props) => {

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 750,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
    };


    return (
        <div className="store-header-wrapper">
            <Slider {...settings} className="owl-carousel">
            <div className="item">
                <img src="https://images.unsplash.com/photo-1622557850710-d08a111d3476?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&h=400&q=80" />
                <div className="hero-details">
                    <h2>Shopping to </h2>
                    <h5>Stay happy</h5>
                    <a href="#" className="btn-purple">Star Shopping</a>
                </div>
            </div>
            <div className="item">
                <img src="https://images.unsplash.com/photo-1622557850710-d08a111d3476?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&h=400&q=80" />
                <div className="hero-details">
                    <h2>Shopping to </h2>
                    <h5>Stay happy</h5>
                    <a href="#" className="btn-purple">Star Shopping</a>
                </div>
            </div>
            <div className="item">
                <img src="https://images.unsplash.com/photo-1622557850710-d08a111d3476?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&h=400&q=80" />
                <div className="hero-details">
                    <h2>Shopping to </h2>
                    <h5>Stay happy</h5>
                    <a href="#" className="btn-purple">Star Shopping</a>
                </div>
            </div>
            </Slider>
        </div>
    );
};


export default HeroSlider;
