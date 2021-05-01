import React from 'react';

function newFriendCard({ friend }) {
    return (
        <div className="___friend-card">
            <div className="___top">
                <img src={friend ? friend.avatar : null} alt="" />
                <div>
                    <h5>{friend ? friend.name : null}</h5>
                    <p>{friend ? friend.mutualFriends : null} Mutual Friends</p>
                </div>
            </div>
            <div className="___middle">
                <p>{friend ? friend.postsThisMonth : null} Posts This Month</p>
                <p>{friend ? friend.followedStores : null} Followed Stores</p>
            </div>
            <div className="___bottom">
                <button>Add</button>
                <button>Remove</button>
            </div>
        </div>
    );
}

export default newFriendCard;
