import React from 'react';
import Link from 'next/link';
import ConvertFollowers from '../../../helpers/convertFollowers';

/*
    PROPS EXPECTS:
    {
        avatar: string,
        headerImage: string,
        listings: integer,
        followers: integer,
        name: string
    }
    SCSS PATH:
    /scss/bluejesticBootstrap/___components/aboutSellerPageHeader.scss
*/

const AboutSellerPageHeader = ({
    avatar,
    headerImage,
    listings,
    followers,
    name,
}) => {
    return (
        <header className="___about-seller-page-header">
            <div className="header-background">
                <img
                    className="header-image"
                    src={headerImage ? headerImage : ''}
                    alt=""
                />
                <img
                    className="avatar"
                    src={avatar ? avatar : ''}
                    alt={name ? name : ''}
                />
                <div className="text">
                    <p>{listings ? listings : null} Listings</p>
                    <p>
                        {followers ? ConvertFollowers(followers) : null}{' '}
                        Followers
                    </p>
                </div>
            </div>
            <h4>{name ? name : null}</h4>
            <div className="buttons">
                <Link href="list-product">
                    <button>Store</button>
                </Link>
                <button>Events</button>
                <Link href="seller-wall">
                    <button>Feed</button>
                </Link>
                <button>Followers</button>
                <button>Message</button>
                <button>Photos</button>
                <button>Videos</button>
            </div>
        </header>
    );
};

export default AboutSellerPageHeader;
