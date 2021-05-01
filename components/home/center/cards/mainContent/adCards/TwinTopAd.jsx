import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import AdItem from './helpers/adItem';


function TwinTopAd(props) {
    const [singleSmall, updateSingleSmall] = useState(props.data.smallAds[0]);
    const [rowSmall, updateRowSmall] = useState(props.data.smallAds.slice(1));
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
        <div className="__main-content">
            <h1 className="__landing-title">
                {props.data.title || 'Electronics'}
            </h1>
            <div className="__twin-top-ad">
                <div className="__first-row">
                    <img src={props.data.bigAd} className="__big-ad" />
                    <AdItem {...singleSmall} />
                </div>
                <div className="">
                    <Slider {...settings}>
                        {rowSmall.map((ad, index) => {
                            return <AdItem {...ad} key={index} />;
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    );
    };

export default TwinTopAd;
