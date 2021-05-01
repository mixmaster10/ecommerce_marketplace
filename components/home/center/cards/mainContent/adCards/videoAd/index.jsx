import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import moment from 'moment';
import ReactPlayer from 'react-player/lazy';

import SocialRow from '../socialAd/components/SocialRow';

function VideoAd({ data, handle }) {
    const [time, updateTime] = useState();

    const tags =
        data &&
        data.tags.map((tag, index) => {
            return <span key={index}>#{`${tag} `}</span>;
        });

    useEffect(() => {
        updateTime(moment(`${data.time}`).fromNow());
        console.log(moment(`${data.time}`).fromNow());
    }, []);

    return (
        <div className="__main-content">
            <div className="__social-ad">
                <div className="__social-header">
                    <img src={data.avatar} className="__social-avatar" />
                    <div className="__social-title-text">
                        <h1 className="__social-title">
                            {data.userName}
                            <span> {data.contentType}</span>
                            <i className="fa fa-ellipsis-v" />
                        </h1>
                        <h2 className="__time-ago">
                            <i className="fa fa-globe" /> Published: {time}
                        </h2>
                        <h2 className="__social-content">{data.title}</h2>
                        <div className="__social-tags">{tags}</div>
                    </div>
                </div>
                <div className="post-group-video">
                    <ReactPlayer url={data.video} width='100%' height='100%'/>
                </div>
                <SocialRow data={data} handle={handle} />
            </div>
        </div>
    );
}

export default VideoAd;
