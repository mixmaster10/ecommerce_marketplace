import React from 'react';
import {LikeOutlined, MessageOutlined, ClockCircleOutlined} from '@ant-design/icons';
import Slider from 'react-slick';

const FashionTrending = (props) => {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 750,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
    };

    return (
        <div className="blog-trending-post">
            <h5>Trending</h5>
            <div className="trending-post-slider">
            <Slider {...settings}>
                <div className="blog-post">
                    <div className="blog-post-image">
                        <img src="https://images.unsplash.com/photo-1615375396220-f7397c52e424?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80" />
                    </div>
                    <div className="blog-content">
                        <span className="blog-category badge-green">Designer Brands</span>
                        <h5>Shop best Women's fashion designers</h5>
                        <ul className="blog-meta">
                            <li><ClockCircleOutlined /> March 2, 2021</li>
                            <li><LikeOutlined /> 22k</li>
                            <li><MessageOutlined /> 5k</li>
                        </ul>
                    </div>
                </div>
                <div className="blog-post">
                    <div className="blog-post-image">
                        <img src="https://images.unsplash.com/photo-1615372021685-b2dc6f9c2819?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=282&q=80" />
                    </div>
                    <div className="blog-content">
                        <span className="blog-category badge-red">Designer Brands</span>
                        <h5>Shop best Women's fashion designers</h5>
                        <ul className="blog-meta">
                            <li><ClockCircleOutlined /> March 2, 2021</li>
                            <li><LikeOutlined /> 22k</li>
                            <li><MessageOutlined /> 5k</li>
                        </ul>
                    </div>
                </div>
                <div className="blog-post">
                    <div className="blog-post-image">
                        <img src="https://images.unsplash.com/photo-1615385164509-79243b513da2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80" />
                    </div>
                    <div className="blog-content">
                        <span className="blog-category badge-dark-gray">Designer Brands</span>
                        <h5>Shop best Women's fashion designers</h5>
                        <ul className="blog-meta">
                            <li><ClockCircleOutlined /> March 2, 2021</li>
                            <li><LikeOutlined /> 22k</li>
                            <li><MessageOutlined /> 5k</li>
                        </ul>
                    </div>
                </div>
                <div className="blog-post">
                    <div className="blog-post-image">
                        <img src="https://images.unsplash.com/photo-1615383915140-a893a0e95d32?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80" />
                    </div>
                    <div className="blog-content">
                        <span className="blog-category badge-light-blue">Designer Brands</span>
                        <h5>Shop best Women's fashion designers</h5>
                        <ul className="blog-meta">
                            <li><ClockCircleOutlined /> March 2, 2021</li>
                            <li><LikeOutlined /> 22k</li>
                            <li><MessageOutlined /> 5k</li>
                        </ul>
                    </div>
                </div>
                <div className="blog-post">
                    <div className="blog-post-image">
                        <img src="https://images.unsplash.com/photo-1615339700936-d74e64fd1d1e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" />
                    </div>
                    <div className="blog-content">
                        <span className="blog-category badge-green">Designer Brands</span>
                        <h5>Shop best Women's fashion designers</h5>
                        <ul className="blog-meta">
                            <li><ClockCircleOutlined /> March 2, 2021</li>
                            <li><LikeOutlined /> 22k</li>
                            <li><MessageOutlined /> 5k</li>
                        </ul>
                    </div>
                </div>
                <div className="blog-post">
                    <div className="blog-post-image">
                        <img src="https://images.unsplash.com/photo-1615326152341-5ac7d091312f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" />
                    </div>
                    <div className="blog-content">
                        <span className="blog-category badge-purple">Designer Brands</span>
                        <h5>Shop best Women's fashion designers</h5>
                        <ul className="blog-meta">
                            <li><ClockCircleOutlined /> March 2, 2021</li>
                            <li><LikeOutlined /> 22k</li>
                            <li><MessageOutlined /> 5k</li>
                        </ul>
                    </div>
                </div>
                <div className="blog-post">
                    <div className="blog-post-image">
                        <img src="https://images.unsplash.com/photo-1615286505008-cbca9896192f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=662&q=80" />
                    </div>
                    <div className="blog-content">
                        <span className="blog-category badge-pink">Designer Brands</span>
                        <h5>Shop best Women's fashion designers</h5>
                        <ul className="blog-meta">
                            <li><ClockCircleOutlined /> March 2, 2021</li>
                            <li><LikeOutlined /> 22k</li>
                            <li><MessageOutlined /> 5k</li>
                        </ul>
                    </div>
                </div>
                </Slider>
            </div>
        </div>
    );
};


export default FashionTrending;
