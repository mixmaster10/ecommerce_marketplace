import React from 'react';

const FriendsSingle = ({name, img}) => {
    return (
        <div className="friends-single-wrapper">
            <div className="friend-image">
                <img src={img} />
            </div>
            <div className="friend-name">
                <h5>{name}</h5>
            </div>
        </div>
    );
};


export default FriendsSingle;
