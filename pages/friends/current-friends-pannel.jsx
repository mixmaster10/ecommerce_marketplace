import React, { useState } from 'react';
import FriendCard from './friend-card';

function CurrentFriendsPannel({ friends }) {
    const [active, setActive] = useState({
        all: true,
        recent: false,
        family: false,
    });

    return (
        <div className="___current-friends-pannel">
            <h4>Your Friends</h4>
            <div className="___buttons">
                <button
                    className={active.all ? '___active' : null}
                    onClick={() =>
                        setActive({
                            all: true,
                            recent: false,
                            family: false,
                        })
                    }>
                    All Friends <span>{friends ? friends.length : null}</span>
                </button>
                <button
                    className={active.recent ? '___active' : null}
                    onClick={() =>
                        setActive({
                            all: false,
                            recent: true,
                            family: false,
                        })
                    }>
                    Recently Added
                </button>
                <button
                    className={active.family ? '___active' : null}
                    onClick={() =>
                        setActive({
                            all: false,
                            recent: false,
                            family: true,
                        })
                    }>
                    Family
                </button>
            </div>
            <div className="___current-friends-cards">
                {friends
                    ? active.all
                        ? friends.map((friend, i) => (
                              <FriendCard key={i} friend={friend} />
                          ))
                        : active.recent
                        ? friends
                              .filter((friend) => friend.recentlyAdded)
                              .map((friend, i) => (
                                  <FriendCard key={i} friend={friend} />
                              ))
                        : friends
                              .filter((friend) => friend.family)
                              .map((friend, i) => (
                                  <FriendCard key={i} friend={friend} />
                              ))
                    : null}
            </div>
            <h3>
                <a>Load more</a>
            </h3>
        </div>
    );
}

export default CurrentFriendsPannel;
