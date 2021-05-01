import React, { Component } from 'react';
import Slider from 'react-slick';
import NextArrow from '../../../carousel/NextArrow';
import PrevArrow from '../../../carousel/PrevArrow';
import { isStaticData } from '../../../../../utilities/app-settings';
import { baseUrl } from '../../../../../repositories/Repository';
import ThumbnailImage from '../elements/ThumbnailImage';
import StaticThumbnailImage from '../elements/StaticThumbnailImage';

class ThumbnailDealHot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            galleryCarousel: null,
            variantCarousel: null,
        };
    }

    componentDidMount() {
        this.setState({
            galleryCarousel: this.slider1,
            variantCarousel: this.slider2,
        });
    }

    render() {
        const gallerySetting = {
            dots: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
        };
        const variantSetting = {
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        dots: false,
                        arrows: false,
                        vertical: false,
                        infinite: false,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4,
                        dots: false,
                        arrows: false,
                        vertical: false,
                        infinite: false,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 4,
                        dots: false,
                        arrows: false,
                        vertical: false,
                        infinite: false,
                    },
                },
            ],
        };
        const { product } = this.props;

        return (
            <div className="ps-product__thumbnail" data-vertical="true">
                <figure>
                    <div className="ps-wrapper">
                        <Slider
                            {...gallerySetting}
                            ref={(slider) => (this.slider1 = slider)}
                            asNavFor={this.state.variantCarousel}
                            className="ps-product__gallery ps-carousel inside">
                            {product.images.map((variant) => (
                                <div className="item" key={variant.id}>
                                    <a href="#">
                                        <img
                                            src={
                                                isStaticData === false
                                                    ? `${baseUrl}${variant.url}`
                                                    : variant.url
                                            }
                                            alt="martfury"
                                        />
                                    </a>
                                </div>
                            ))}
                        </Slider>
                        <div className="ps-product__badge">
                            <span>
                                Save <br /> $280.00
                            </span>
                        </div>
                    </div>
                </figure>
                <Slider
                    asNavFor={this.state.galleryCarousel}
                    ref={(slider) => (this.slider2 = slider)}
                    swipeToSlide={true}
                    arrows={false}
                    slidesToShow={3}
                    vertical={true}
                    focusOnSelect={true}
                    infinite={false}
                    {...variantSetting}
                    className="ps-product__variants">
                    {product.images.map((variant) => (
                        <div className="item" key={variant.id}>
                            <ThumbnailImage url={variant.url} />
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}

export default ThumbnailDealHot;
