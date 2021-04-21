import React from 'react';
import Link from 'next/link';
import convertFollowers from '../../helpers/convertFollowers';

function StoreCard({ store }) {
    return (
        <div className="___store-card">
            <Link href="/list-product">
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
                    <div className="___ellipsis-div">
                        <h5>{store ? store.name : null}</h5>
                        <img
                            className="___ellipsis"
                            src="./static/img/icons/ellipsis.svg"
                            alt=""
                        />
                    </div>
                </div>
            </Link>
            <div className="___middle">
                <p>{store ? store.mutualFriends : null} Mutual Friends</p>
                <p>{store ? store.listedProducts : null} Listed Products</p>
                <p>
                    {store ? convertFollowers(store.followers) : null} Followers
                </p>
                <p>{store ? store.posts : null} Posts</p>
            </div>
            <div className="___bottom">
                <button>Unfollow</button>
            </div>
        </div>
    );
}

export default StoreCard;
