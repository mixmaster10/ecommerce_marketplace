import React from 'react';

const SingleGroup = ({img, name, followers, ...props}) => {
    return (
        <div className="single-group-wrapper">
            <div className="group-image">
                <img src={img} />
            </div>
            <div className="group-info">
                <h5>{name}</h5>
                <p>{followers}k followers</p>
            </div>
        </div>
    );
};


export default SingleGroup;
