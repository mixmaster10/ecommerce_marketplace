import React from 'react';

const FashionPhotos = (props) => {
    return (
        <div className="fashion-photo-wrapper">
            <div className="big-photo">
                <img src="/static/img/categories/fashion/2.jpg" alt="fashion-photo" />
            </div>
            <div className="small-photo">
                <img src="/static/img/categories/fashion/3.jpg" alt="fashion-photo" />
                <img src="/static/img/categories/fashion/1.jpg" className="small-2" alt="fashion-photo" />
            </div>
        </div>
    );
};


export default FashionPhotos;
