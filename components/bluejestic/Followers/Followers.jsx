import React from 'react';
import Follower from './Follower';
import followers from '../../../public/static/data/followers.json';

export default function Followers() {
    return (
        <>
            {followers.map((follower) => (
                <Follower key={follower.id} image={follower.follower_image} />
            ))}
        </>
    );
}
