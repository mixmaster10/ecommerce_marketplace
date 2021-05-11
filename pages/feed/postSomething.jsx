import React from 'react';

const PostSomething = (props) => {
    return (
        <div className="post-something-wrapper">
            <div className="title-wrapper">
                <h4>Post Something</h4>
            </div>
            <div className="post-wrapper">
                <div className="user-avtar">
                    <img src="/static/img/feed/avtar.png" />
                </div>
                <div className="post-input">
                    <input type="text" placeholder="What’s on your mind?" />
                </div>
            </div>
        </div>
    );
};


export default PostSomething;
