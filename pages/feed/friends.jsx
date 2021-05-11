import React from 'react';
import FriendsSingle from './friendsSingle';
import {Divider } from 'antd';

const Friends = ({title}) => {
    return (
        <div className="friends-wrapper">
            <div className="title-wrapper d-flex justify-content-between">
                <h5>{title}</h5>
                <p>All</p>
            </div>
            <div className="friends-search">
                <input type="text" placeholder="Search" />
            </div>
            <div className="friends-inner-wrapper">
                <FriendsSingle
                    img="/static/img/feed/friend-01.png"
                    name="Annette Murphy"
                />
                <Divider style={{margin:"10px 0"}} />
                <FriendsSingle
                    img="/static/img/feed/friend-02.png"
                    name="Annette Murphy"
                />
                <Divider style={{margin:"10px 0"}} />
                <FriendsSingle
                    img="/static/img/feed/friend-03.png"
                    name="Annette Murphy"
                />
                <Divider style={{margin:"10px 0"}} />
                <FriendsSingle
                    img="/static/img/feed/friend-04.png"
                    name="Annette Murphy"
                />
                <Divider style={{margin:"10px 0"}} />
                <FriendsSingle
                    img="/static/img/feed/friend-05.png"
                    name="Annette Murphy"
                />
            </div>
        </div>
    );
};


export default Friends;
