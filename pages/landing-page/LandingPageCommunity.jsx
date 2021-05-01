import React from 'react';
import Particles from 'react-particles-js';

const LandingPageCommunity = (props) => {

    return (
        <div className="landing-page-community" id="community">
            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 100
                        },
                        "line_linked": {
                            "enable": false
                        },
                        "size": {
                            "value": 4
                        },
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }} />
            <h2>Community</h2>
            <p>Find the right group that fits your shopping interests</p>
            <a href="#" className="btn bnt-primary">Explore All Communities</a>
        </div>
    );
};


export default LandingPageCommunity;
