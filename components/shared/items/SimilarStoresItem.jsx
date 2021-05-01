import React from 'react';
import ConvertFollowers from '../../../helpers/convertFollowers';

/*
    PROPS EXPECTS:
    {
        store:
            {
                avatar: string,
                name: string
                followers: integer,
            }
    }
    SCSS PATH:
    /scss/bluejesticBootstrap/___components/similarStoresItem.scss
*/

function SimilarStoresItem({ store }) {
    return (
        <li className="___similar-stores-item">
            <img src={store ? store.avatar : ''} alt="" />
            <div>
                <h5>{store ? store.name : null}</h5>
                <p>
                    {store ? ConvertFollowers(store.followers) : null} Followers
                </p>
            </div>
        </li>
    );
}

export default SimilarStoresItem;
