import React from 'react';

function friendCard({ friend }) {
    return (
        <div className="___friend-card">
            <div className="___top">
                <div className="___avatar-div">
                    <img src={friend ? friend.avatar : null} alt="" />
                    <div
                        className={
                            friend && friend.online ? '___online' : '___offline'
                        }></div>
                </div>
                <div className="___text-div">
                    <h5>{friend ? friend.name : null}</h5>
                    <p>{friend ? friend.mutualFriends : null} Mutual Friends</p>
                </div>
                <img
                    className="___ellipsis"
                    src="/static/img/icons/ellipsis.svg"
                    alt=""
                />
            </div>
            <div className="___middle">
                <p>{friend ? friend.postsThisMonth : null} Posts This Month</p>
                <p>{friend ? friend.followedStores : null} Followed Stores</p>
            </div>
            <div className="___bottom">
                <button>Message</button>
            </div>
        </div>
    );
}

export default friendCard;
