import React from 'react';
import Slider from 'react-slick';


const StoreSingle = ({ cover, userprofile, name, location, description, followers, products }) => {


    return (
        <div className="store-single-wrapper">
            <div className="store-cover-photo"  style={{backgroundImage:`url(${cover})`, backgroundSize:'cover', backgroundRepeat:'no-repeat',}}>
            </div>
            <div className="store-detail-wrapper">
                <div className="d-flex">
                    <div className="store-profile-avtar">
                        <img src={userprofile} />
                    </div>
                    <div className="store-details">
                        <h4>{name}</h4>
                        <p>{location}</p>
                    </div>
                    <div className="store-actions">

                    </div>
                </div>
                <div className="store-desc">
                    <p>{description}</p>
                </div>
            </div>
            <div className="store-followers">
                <div className="followers">
                    <h5>{followers}</h5>
                    <p>Followers</p>
                </div>
                <div className="products">
                    <h5>{products}</h5>
                    <p>Products</p>
                </div>
            </div>
            <div className="store-btn">
                <a href="#" className="btn-store">View Store</a>
            </div>
        </div>
    );
};


export default StoreSingle;
