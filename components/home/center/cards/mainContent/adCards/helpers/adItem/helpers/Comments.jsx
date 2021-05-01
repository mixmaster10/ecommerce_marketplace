import React, { useEffect, useState } from 'react';
import Link from 'next/link';

function Comments(props) {
    const [comments, updateComments] = useState(props.comments);

    useEffect(() => {
        if (props.comments >= 10000) {
            updateComments(`${comments.toString().slice(0, 2)}k`);
        } else if (props.comments >= 1000) {
            let parsed = props.comments / 1000;
            updateComments(
                `${parsed.toString().slice(0, 3)}k`
            );
        }
    }, [comments]);
    
    return (
        <div className="__column" >
            <i class="fa fa-comments"></i>
            <div className="__count">{comments}</div>
        </div>
    );
}


export default Comments;