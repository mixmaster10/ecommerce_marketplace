import React from 'react';
import TwinTopAd from './adCards/TwinTopAd'
import SocialAd from './adCards/socialAd/SocialAd'
import SingleTopAd from './adCards/singleTopAd/SingleTopAd'
import VideoAd from './adCards/videoAd'

function Feed(props) {
    const feed = props.feed && props.feed.map((ad, index) => {
        if (ad.type === 'twin-top-ad') {
            return <TwinTopAd data={ad} key={index} />;
        } else if (ad.type === 'single-top-ad') {
            return <SingleTopAd data={ad} key={index} />;
        } else if (ad.type === 'social-ad') {
            return <SocialAd data={ad} handle={props.avatar} key={index} />;
        } else if (ad.type === "video-ad") {
            return <VideoAd data={ad} handle={props.avatar} key={index} />;
            // return <ReactPlayer url={ad.video}
        }
        
    });
    
    return(
        <>
        {feed}
        </>
    )
}



export default Feed;
