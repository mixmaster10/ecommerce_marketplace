import React from 'react';

function NewsRow(props) {
    let followers = '357k'
    if (props.followers.length === 4) {
        followers = `${parseInt(props.followers.slice(0, 2)) / 10}K`
    } else if (props.followers.length === 5) {
        followers = `${parseInt(props.followers.slice(0, 2))}K`;
    } else if (props.followers.length === 6) {
        followers = `${parseInt(props.followers.slice(0, 3))}K`;
    } else if (props.followers.length === 7) {
        followers = `${parseInt(props.followers.slice(0, 2)) / 10}M`;
    }
    return(
        <div className="__news-row">
            <a href={props.groupLink} className='__news-img'>
                    <img className="__widget-photo" src={props.imgLink} />
            </a>
            <div className="__news-text-container">
                <a href={props.articleLink}>
                    <div className="__news-text-container">
                        <p className="__news-text">{props.text}</p>
                        <p className="__follower-count">
                            {followers} Followers
                        </p>
                    </div>
                </a>
            </div>
        </div>
    )
};

export default NewsRow;
