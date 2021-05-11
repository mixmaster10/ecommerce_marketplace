import React from 'react';
import Slider from 'react-slick';

const HighLights = ({ title }) => {

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
        <div className="feed-hightlight-wrapper mb-5">
            <div className="title-wrapper d-flex justify-content-between">
                <h5>{title}</h5>
                <p>All</p>
            </div>
            <div className="feed-hightlight-inner-wrapper">
                <Slider {...settings} className="owl-carousel">
                    <div className="item">
                        <div className="add-new-highlight">
                            +
                        </div>
                    </div>
                    <div className="item">
                        <div className="hightlight">
                            <img src="/static/img/feed/highlight-01.png" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="hightlight">
                            <img src="/static/img/feed/highlight-02.png" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="hightlight">
                            <img src="/static/img/feed/highlight-03.png" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="hightlight">
                            <img src="/static/img/feed/highlight-04.png" />
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};


export default HighLights;
