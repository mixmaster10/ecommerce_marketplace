import React from 'react';
import Slider from 'react-slick';

const ProductCategorySlider = (props) => {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 750,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
    };

    return (
        <div className="categories-slider chat-box mb-3">
            <Slider {...settings} className="owl-carousel">
                <div className="item">
                    <div className="product">
                        <div className="product-bg"><img className="img-fluid" src="/static/img/categories01.jpg" alt="" /></div>
                        <div className="product-content">
                            <h6 className="product-name"><a href="#">Electronics Collection</a></h6>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="product">
                        <div className="product-bg"><img className="img-fluid" src="/static/img/categories02.jpg" alt="" /></div>
                        <div className="product-content">
                            <h6 className="product-name"><a href="#">Apparel Collection</a></h6>
                        </div>

                    </div>
                </div>

                <div className="item">
                    <div className="product">
                        <div className="product-bg"><img className="img-fluid" src="/static/img/categories03.jpg" alt="" /></div>
                        <div className="product-content">
                            <h6 className="product-name"><a href="#">Winter Collection</a></h6>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="product">
                        <div className="product-bg"><img className="img-fluid" src="/static/img/categories02.jpg" alt="" /></div>
                        <div className="product-content">
                            <h6 className="product-name"><a href="#">Apple iPhone 8 Plus</a></h6>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <div className="product">
                        <div className="product-bg"><img className="img-fluid" src="/static/img/categories03.jpg" alt="" /></div>
                        <div className="product-content">
                            <h6 className="product-name"><a href="#">Bose Ear-Phone</a></h6>
                        </div>
                    </div>
                </div>

            </Slider>
        </div>
    );
};

export default ProductCategorySlider;
