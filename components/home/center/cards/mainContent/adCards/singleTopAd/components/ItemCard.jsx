import React from 'react';
import ReactStars from 'react-stars';

function ItemCard(props) {
    let isSale = '__price';

    if (props.data.salePrice) {
        isSale = isSale + ' __strikethrough';
    }

    const titleLength = 15
    let title = '';
    if (props.data.title.length > titleLength) {
        title = props.data.title.slice(0, titleLength) + '...';
    } else {
        title = props.data.title;
    }

    return (
        <div className="__ad">
            <img src={props.data.img} />
            <h1 className="__shop">{props.data.shop}</h1>
            <h2 className="__title">{title}</h2>
            <ReactStars count={5} value={props.data.rating} />
            <div className="__price-container">
                <h2 className={isSale}>${props.data.price}</h2>
                {props.data.salePrice && (
                    <h2 className="__sale-price">${props.data.salePrice}</h2>
                )}
            </div>
        </div>
    );
}

export default ItemCard;