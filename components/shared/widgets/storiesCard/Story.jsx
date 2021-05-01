import React from 'react';

function StoryCard(props) {
    return (
        <div className="__story">
            <img className="__story-img" src={props.story.storyImg} />
            <div>
                <div className="__line" />
            </div>
            <div className="__container">
                <img className="__story-avatar" src={props.story.avatar} />
            </div>
            <div className="__container">
                <div className="__store-name">{props.story.storeName}</div>
            </div>
        </div>
    );
}

export default StoryCard;
