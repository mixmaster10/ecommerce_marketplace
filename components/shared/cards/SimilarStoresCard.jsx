import React from 'react';
import SimilarStoresItem from '../items/SimilarStoresItem';

/*
    PROPS EXPECTS:
    {
        stores: [
            {
                avatar: string,
                name: string
                followers: integer,
            }
        ]
    }
    REQUIRES:
    SimilarStoresItem from '/components/shared/items/SimilarStoresItem.jsx'
    SCSS PATH:
    /scss/bluejesticBootstrap/___components/similarStoresCard.scss
*/

const SimilarStoresCard = ({ stores }) => {
    return (
        <div className="___similar-stores-card">
            <div className="top">
                <h5>Similar Stores</h5>
                <a>See All</a>
            </div>
            <ul>
                {stores
                    ? stores.map((store, i) => (
                          <SimilarStoresItem
                              key={i}
                              store={store ? store : null}
                          />
                      ))
                    : null}
            </ul>
        </div>
    );
};

export default SimilarStoresCard;
