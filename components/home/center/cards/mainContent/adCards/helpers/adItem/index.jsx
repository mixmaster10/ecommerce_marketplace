import React from 'react';
import Link from 'next/link';
import Comments from './helpers/Comments';
import Likes from './helpers/Likes';
import Share from './helpers/Share';

function AdItem(props){
    let title = ''
    if (props.title.length > 15) {
        title = props.title.slice(0, 15) + '...'
    } else {
        title = props.title;
    };
    return (
        <div className="__ad-item">
            <div className="__img-container">
                <img src={props.img} className="__item-img" />
            </div>
            <div className="__ad-title">
                <span>{title}</span>
            </div>
            <div className='__buy'>
                <div className='__price'>${props.price}</div>
                <div className='__add-to-cart'>Add</div>
            </div>
            <div>
                <div className="__social-meta">
                    <Comments comments={props.comments} />
                    <Likes likes={props.likes} />
                    <Share shares={props.shares} />
                </div>
            </div>
        </div>
    );
}


export default AdItem