import React from 'react';
import Slider from 'react-slick';
import SingleDeal from './singleDeal';

const DealPost = ({title}) => {

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 750,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
    };


    return (
        <div className="dealpost-wrapper">
            <div className="title-wrapper">
                <h5>{title}</h5>
                <p>See All</p>
            </div>
            <div className="dealpost-innerwrapper">
                <Slider {...settings} className="owl-carousel">
                    <div className="item">
                        <SingleDeal
                            storeimg="/static/img/feed/store-img.png"
                            storename="Ele"
                            productimage="/static/img/feed/product-01.png"
                            productname="LG CX Consumer Series 77 4K UHD Smart OLED"
                            productprice="$1,096.00"
                        />
                    </div>
                    <div className="item">
                        <SingleDeal
                            storeimg="/static/img/feed/store-img.png"
                            storename="Youstore"
                            productimage="/static/img/feed/product-02.png"
                            productname="TCL 55R635 55 inch 6-SERIES 4K QLED..."
                            productprice="$799.99"
                        />
                    </div>
                    <div className="item">
                        <SingleDeal
                            storeimg="/static/img/feed/store-img.png"
                            storename="Youstore"
                            productimage="/static/img/feed/product-03.png"
                            productname="LG CX Consumer Series 77 4K UHD Smart OLED"
                            productprice="$1,979.99"
                        />
                    </div>
                    <div className="item">
                        <SingleDeal
                            storeimg="/static/img/feed/store-img.png"
                            storename="Ele"
                            productimage="/static/img/feed/product-01.png"
                            productname="LG CX Consumer Series 77 4K UHD Smart OLED"
                            productprice="$1,096.00"
                        />
                    </div>
                    <div className="item">
                        <SingleDeal
                            storeimg="/static/img/feed/store-img.png"
                            storename="Youstore"
                            productimage="/static/img/feed/product-02.png"
                            productname="TCL 55R635 55 inch 6-SERIES 4K QLED..."
                            productprice="$799.99"
                        />
                    </div>
                    <div className="item">
                        <SingleDeal
                            storeimg="/static/img/feed/store-img.png"
                            storename="Youstore"
                            productimage="/static/img/feed/product-03.png"
                            productname="LG CX Consumer Series 77 4K UHD Smart OLED"
                            productprice="$1,979.99"
                        />
                    </div>
                </Slider>
            </div>
        </div>
    );
};


export default DealPost;
