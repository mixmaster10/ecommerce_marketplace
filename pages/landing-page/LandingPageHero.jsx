import React from 'react';

const LandingPageHero = (props) => {

    return (
        <div className="hero-wrapper">
            <div className="circles">
                <div className="point animated-point-1"></div>
                <div className="point animated-point-2"></div>
                <div className="point animated-point-3"></div>
                <div className="point animated-point-4"></div>
                <div className="point animated-point-5"></div>
                <div className="point animated-point-6"></div>
                <div className="point animated-point-7"></div>
                <div className="point animated-point-8"></div>
                <div className="point animated-point-9"></div>
            </div>
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-6">
                        <div className="hero-content-left ptb-100 text-white">
                            <h2 className="text-white"><span>Revolutionizing the social</span> <br />shopping experience</h2>
                            <p className="lead">Our innovative e-Commerce platform aims to connect the world: one item at a time.</p>
                            <div className="app-store">
                                <img src="/static/img/landing-page/app-store.png" alt="ios" />
                                <img src="/static/img/landing-page/play-store.png" alt="android" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 animated-images">
                        <div className="hero-animation-img">
                            <img className="img-fluid d-block animation-one" src="/static/img/landing-page/Hero_desktop.png" alt="animation" />
                            <img className="img-fluid d-none d-lg-block animation-two" src="/static/img/landing-page/3.png" alt="animation" width="50" />
                            <img className="img-fluid d-none d-lg-block animation-three" src="/static/img/landing-page/9.png" alt="animation" width="50" />
                            <img className="img-fluid d-none d-lg-block animation-four" src="/static/img/landing-page/5.png" alt="animation" width="50" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default LandingPageHero;
