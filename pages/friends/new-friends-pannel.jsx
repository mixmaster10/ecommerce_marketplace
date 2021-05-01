import React, { useState } from 'react';
import Slider from 'react-slick';
import NewFriendCard from './new-friend-card';

function NewFriendsPannel({ suggestedFriends, friendRequests }) {
    const [requests, showRequests] = useState(false);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };

    return (
        <div className="___new-friends-pannel">
            <div className="___new-friends-buttons">
                <button
                    className={requests ? null : '___active'}
                    onClick={() => showRequests(false)}>
                    Suggested Friends
                </button>
                <button
                    className={requests ? '___active' : null}
                    onClick={() => showRequests(true)}>
                    Friend Requests
                </button>
            </div>
            <div className="___new-friends-cards">
                {requests ? (
                    <Slider className="___slider" {...settings}>
                        {friendRequests.map((friend, i) => (
                            <NewFriendCard key={i} friend={friend} />
                        ))}
                    </Slider>
                ) : suggestedFriends ? (
                    <Slider className="___slider" {...settings}>
                        {suggestedFriends.map((friend, i) => (
                            <NewFriendCard key={i} friend={friend} />
                        ))}
                    </Slider>
                ) : null}
            </div>
        </div>
    );
}

export default NewFriendsPannel;
