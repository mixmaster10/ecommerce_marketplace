import React from 'react';

export default function ActivityCard(props) {
    return (
        <div className="_activity-card-container">
            <div className="_activity-card-heading">
                <h3 className="_activity-card-title">{props.title}</h3>

                <a className="_activity-card-more" href="">
                    See All
                </a>
            </div>
            <div className="_activity-card-divider"></div>
            <div className="_activity-card-main">
                <img
                    className="_activity-card-avatar"
                    src={props.avatar}
                    alt="avatar image"
                />
                <p className="_activity-card-description">
                    Amanda, Jeff and 5 others are following you
                </p>
            </div>
        </div>
    );
}
