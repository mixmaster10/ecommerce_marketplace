import React, { useEffect, useState } from 'react';
import Link from 'next/link';

function Likes(props) {
    const [likes, updateLikes] = useState(props.likes);

    useEffect(() => {
        if (props.likes >= 10000) {
            updateLikes(`${likes.toString().slice(0, 2)}k`);
        } else if (props.likes >= 1000) {
            let parsed = props.likes / 1000;
            updateLikes(`${parsed.toString().slice(0, 3)}k`);
        }
    }, [likes]);

    return (
        <div className="__column">
            <i src="" alt="heart" className="__likes fa fa-thumbs-up" />
            <div>{likes}</div>
        </div>
    );
}


export default Likes;