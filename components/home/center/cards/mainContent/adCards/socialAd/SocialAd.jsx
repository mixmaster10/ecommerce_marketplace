import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import moment from 'moment'
import SocialRow from './components/SocialRow'

function SocialAd({data, handle}) {
    const [time, updateTime] = useState();

    const tags = data && data.tags.map((tag, index) => {
        return <span key={index}>#{`${tag} `}</span>
    });

    useEffect(() => {
        updateTime(moment(data.time).fromNow());
    })

    
    return(
        <div className="__main-content">
            <div className='__social-ad'>
                <div className='__social-header'>
                    <img src={data.avatar} className='__social-avatar' />
                    <div className='__social-title-text'>
                        <h1 className="__social-title">{data.headline}<span> {data.contentType}</span><i className="fa fa-ellipsis-v" /></h1>
                        <h2 className='__time-ago'><i className="fa fa-globe" /> Published: {time}</h2>
                        <h2 className='__social-content'>{data.content}</h2>
                        <div className='__social-tags'>{tags}</div>
                    </div>
                </div>
                <img src={data.img} />
                <SocialRow data={data} handle={handle}/>
            </div>
        </div>)
};

export default SocialAd;
