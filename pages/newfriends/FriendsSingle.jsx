import React from 'react';


const FriendsSingle = ({profile, name, location, friends, stores}) => {
    return (
        <div className="friends-single-wrapper">
            <div className="friends-single-inner-wrapper">
                <div className="friend-info">
                    <div className="friend-avtar">
                        <img src={profile} />
                    </div>
                    <h5>{name}</h5>
                    <p>{location}</p>
                </div>
                <div className="friend-details">
                    <div className="friend-friends">
                        <h5>{friends}</h5>
                        <p>Friends</p>
                    </div>
                    <div className="friend-stores">
                        <h5>{stores}</h5>
                        <p>Stores</p>
                    </div>
                </div>
                <div className="friend-btn">
                    <a href="#" className="btn-friend">Add to Friends</a>
                </div>
            </div>
        </div>
    );
};


export default FriendsSingle;
