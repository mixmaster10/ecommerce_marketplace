import React from 'react';

const GroupAbout = (props) => {
    return (
        <div className="widget __card groupabout-widget">
            <h1 className="__landing-title">About</h1>
            <div className="group-about">
                <p>This group is about electronic devices. Share your favorite new electronic releases here.</p>
                <div className="share-group mt-4 mt-md-5">
                <p className="mb-0">Share this Group</p>
                <a href="#" className="share-fb"><i className="fa fa-facebook-square"></i></a>
                <a href="#" className="share-ins"><i className="fa fa-instagram"></i></a>
                <a href="#" className="share-tw"><i className="fa fa-twitter-square"></i></a>
                <a href="#" className="share-pin"><i className="fa fa-pinterest-square"></i></a>
            </div>
            </div>
            
        </div>
    )
}

export default GroupAbout;