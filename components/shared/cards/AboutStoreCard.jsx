import React from 'react';

/*
    PROPS EXPECTS:
    {
        name: string,
        about: string
    }
    SCSS PATH:
    /scss/bluejesticBootstrap/___components/aboutStoreCard.scss
*/

const AboutStoreCard = ({ name, about }) => {
    return (
        <section className="___about-store-card">
            <div className="inner">
                <img src="/static/img/icons/store-icon.png" alt="" />
                <h5>About {name ? name : null}</h5>
            </div>
            <p>{about ? about : null}</p>
        </section>
    );
};

export default AboutStoreCard;
