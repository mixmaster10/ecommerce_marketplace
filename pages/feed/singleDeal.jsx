import React from 'react';

const SingleDeal = ({storeimg, storename, productimage, productname, productprice}) => {
    return (
        <div className="single-deal-wrapper">
            <div className="single-deal-inner-wrapper">
                <div className="store-info">
                    <div className="store-image">
                        <img src={storeimg} />
                    </div>
                    <h5>{storename}</h5>
                </div>
                <div className="product-info">
                    <div className="product-image">
                        <img src={productimage} />
                    </div>
                    <h5 className="product-name">{productname}</h5>
                    <div className="product-meta">
                        <h5>{productprice}</h5>
                        <img src="/static/img/feed/heart.svg" />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default SingleDeal;
