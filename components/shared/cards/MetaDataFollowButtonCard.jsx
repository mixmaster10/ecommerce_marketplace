import React from 'react';
import ConvertFollowers from '../../../helpers/convertFollowers';
import ReactStars from 'react-stars';

/*
    PROPS EXPECTS:
    {
        followers: integer,
        products: integer,
        posts: integer,
        sales: integer,
        rating: integer
    }
    SCSS PATH:
    /scss/bluejesticBootstrap/___components/metaDataFollowButtonCard.scss
*/

const MetaDataFollowButtonCard = ({
    followers,
    products,
    posts,
    sales,
    rating,
}) => {
    return (
        <div className="___meta-data-follow-button-card">
            <div className="inner">
                <ul>
                    <li>
                        <img src="/static/img/icons/followers.svg" alt="" />
                        <div>
                            Followers{' '}
                            <span>
                                {followers ? ConvertFollowers(followers) : null}
                            </span>
                        </div>
                    </li>
                    <li>
                        <img src="/static/img/icons/products.svg" alt="" />
                        <div>
                            Products <span>{products ? products : null}</span>
                        </div>
                    </li>
                    <li>
                        <img src="/static/img/icons/post.svg" alt="" />
                        <div>
                            Posts <span>{posts ? posts : null}</span>
                        </div>
                    </li>
                    <li>
                        <img src="/static/img/icons/sales.svg" alt="" />
                        <div>
                            Sales <span>{sales ? sales : null}</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="follow-rating">
                <div>
                    <p>Rating</p>
                    <ReactStars count={5} value={rating ? rating : 0} />
                </div>
                <button className="follow-button">Follow</button>
            </div>
        </div>
    );
};

export default MetaDataFollowButtonCard;
