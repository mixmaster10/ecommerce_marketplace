import React from 'react';

export default function Follower(props) {
    return (
        <img
            className="_vendor-card-followers-avatar"
            src={props.image}
            alt="avatar image"
        />
    );
}
