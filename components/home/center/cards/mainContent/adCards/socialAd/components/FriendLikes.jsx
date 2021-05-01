import React, { useEffect } from 'react';

function FriendLikes(props) {
    const friendAvatars = props.data
        && props.data.map((friend, index) => {
            return (
                <a href="#" key={index}>
                    <img src={friend.avatar} className="img-fluid" />
                </a>
            );
        });

    function friendList() {
        if (props.data.length > 2) {
            return(
                <div className='__friend-list'>{props.data[0].name}, {props.data[1].name} And {props.data.length - 3} More Liked</div>
            )}
        else if (props.data.length = 2) {return <div className='__friend-list'>{props.data[0].name}, And {props.data[1].name} Liked</div>}
        else {return <div className='__friend-list'>{props.data[0].name} Liked</div>}

    } 

    
    return(
        <div className='__friend-likes-card'>
            <div className='__avatars-row'>
                {friendAvatars}
            </div>
            <div className='__list-container'>
                {/* {friendList()} */}
            </div>
        </div>
    )
}

export default FriendLikes