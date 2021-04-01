import React from 'react';
import Slider from 'react-slick';

const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 750,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
};

const LandingPageDiscover = (props) => {

    return (
        <div className="landing-discover" id="discover">
            <img src="/static/img/landing-page/discover-bg.jpg" className="discover-01" />
            <img src="/static/img/landing-page/discover-bg.jpg" className="discover-02" />
            <div className="container-fluid">
                <div className="row mb-5">
                    <div className="col-md-12 text-center">
                        <h2><b>Discover</b></h2>
                        <p>Time to join the future of social shopping network</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Slider {...settings} className="owl-carousel">
                            <div className="item">
                                <div className="slider-slide">
                                    <div className="slider-img">
                                        <img src="/static/img/landing-page/slider-01.jpg" />
                                    </div>
                                    <div className="slider-info">
                                        <img src="/static/img/landing-page/slider-01-small.png" />
                                        <h4 className="text-purple">Creators</h4>
                                        <p>Follow us for the latest news, featured profiles, and tips for creators.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="slider-slide">
                                    <div className="slider-img">
                                        <img src="/static/img/landing-page/slider-02.jpg" />
                                    </div>
                                    <div className="slider-info">
                                        <img src="/static/img/landing-page/slider-02-small.png" />
                                        <h4 className="text-cyan">Stand Out</h4>
                                        <p>Build influence and create compelling content that's distinctly yours.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="slider-slide">
                                    <div className="slider-img">
                                        <img src="/static/img/landing-page/slider-03.jpg" />
                                    </div>
                                    <div className="slider-info">
                                        <img src="/static/img/landing-page/slider-03-small.png" />
                                        <h4 className="text-pink">Grow with Us</h4>
                                        <p>Share and grow your brand with our diverse, global community.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="slider-slide">
                                    <div className="slider-img">
                                        <img src="/static/img/landing-page/slider-04.jpg" />
                                    </div>
                                    <div className="slider-info">
                                        <img src="/static/img/landing-page/slider-04-small.png" />
                                        <h4 className="text-purple">Explore what's new</h4>
                                        <p>Express yourself in new ways with the latest Social Apps features.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="slider-slide">
                                    <div className="slider-img">
                                        <img src="/static/img/landing-page/slider-05.jpg" />
                                    </div>
                                    <div className="slider-info">
                                        <img src="/static/img/landing-page/slider-05-small.png" />
                                        <h4 className="text-cyan">Group Chat</h4>
                                        <p>Keep in touch with the groups of people that matter the most.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="slider-slide">
                                    <div className="slider-img">
                                        <img src="/static/img/landing-page/slider-06.jpg" />
                                    </div>
                                    <div className="slider-info">
                                        <img src="/static/img/landing-page/slider-06-small.png" />
                                        <h4 className="text-pink">Speak Freely</h4>
                                        <p>With voice calls, you can talk to your friends and family for free.</p>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default LandingPageDiscover;
