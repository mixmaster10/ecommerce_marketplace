import React from 'react';
import convertFollowers from '../../helpers/convertFollowers';

function newStoreCard({ store }) {
    return (
        <div className="___store-card">
            <div className="___top">
                <img
                    className="___background"
                    src={store ? store.backgroundImage : null}
                    alt=""
                />
                <img
                    className="___avatar"
                    src={store ? store.avatar : null}
                    alt=""
                />
                <h5>{store ? store.store_name : null}</h5>
            </div>
            <div className="___middle">
                <p>{store ? store.mutualFriends : null} Mutual Friends</p>
                <p>{store ? store.listedProducts : null} Listed Products</p>
                <p>
                    {store ? convertFollowers(store.followers) : null} Followers
                </p>
                <p>{store ? store.posts : null} Posts</p>
            </div>
            <div className="___bottom">
                <button>Follow</button>
                <button>Remove</button>
            </div>
        </div>
    );
}

export default newStoreCard;
