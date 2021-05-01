import React from 'react';

const LandingPageFeatures = (props) => {

    return (
        <div>
            <div className="landing-features" id="features">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md-12">
                            <h1 className="text-center"><b>Features</b></h1>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-5 text-center">
                            <img src="/static/img/landing-page/image-14.png" alt="img" />
                        </div>
                        <div className="col-md-7">
                            <div className="feature-info">
                                <h2><b>Seamlessly share photos</b>  and content</h2>
                                <p>Bluejestic brings friends and family together through a highly engaging shopping platform</p>
                                <div className="feature-icon">
                                    <img src="/static/img/landing-page/1.png" />
                                    <img src="/static/img/landing-page/2.png" />
                                    <img src="/static/img/landing-page/7.png" />
                                    <img src="/static/img/landing-page/10.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="landing-features bg-light-blue">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="feature-info">
                                <h2><b>Expand and strengthen your social network</b></h2>
                                <p>Meet new people from around the world, bridging the divide between social media and e-Commerce</p>
                            </div>
                        </div>
                        <div className="col-md-5 text-left">
                            <img src="/static/img/landing-page/Features_mobile2.png" height="550" alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default LandingPageFeatures;
