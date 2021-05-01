import React from 'react';

/*
    PROPS EXPECTS:
    {
        location: {
            city: string,
            state: string,
            postalCode: string
        },
        joinDate: string (YYYY),
        websites: [...strings],
        sales: integer,
        chart: string
    }
    SCSS PATH:
    /scss/bluejesticBootstrap/___components/aboutStoreInformationCard.scss
*/

const AboutStoreInformationCard = ({
    location,
    joinDate,
    websites,
    sales,
    chart,
}) => {
    return (
        <section className="___about-store-information-card">
            <div className="inner">
                <img src="/static/img/icons/info-icon.png" alt="" />
                <h5>Store Information</h5>
            </div>
            <div className="flex-info">
                <div className="info-column">
                    <h4>Location:</h4>
                    <p>
                        City: {location ? location.city : null}{' '}
                        {location ? location.state : null}
                    </p>
                    <p>Zip Code: {location ? location.postalCode : null}</p>
                </div>
                <div className="info-column">
                    <h4>On Bluejestic Since:</h4>
                    <p>{joinDate ? joinDate : null}</p>
                </div>
                <div className="info-column">
                    <h4>Website:</h4>
                    {websites ? (
                        websites.map((website, i) => <a key={i}>{website}</a>)
                    ) : (
                        <p>none</p>
                    )}
                </div>
            </div>
            <div className="overview">
                <div className="inner">
                    <img src="/static/img/icons/overview-icon.png" alt="" />
                    <h5>Store Overview</h5>
                </div>
                <span>Total Sales {sales ? sales : null}</span>
            </div>
            <div className="overview-data">
                <ul>
                    <li>Fashion Dresses</li>
                    <li>Shoes</li>
                    <li>Handbags</li>
                    <li>Watches</li>
                    <li>Accessories</li>
                </ul>
                {chart && <img src={chart ? chart : ''} alt="" />}
            </div>
        </section>
    );
};

export default AboutStoreInformationCard;
