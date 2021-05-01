import React from 'react';

function activityCard() {
    return (
        <div className="_activity-card-container">
            <div className="_activity-card-heading">
                <h3 className="_activity-card-title">Activity</h3>

                <a className="_activity-card-more" href="">
                    See all
                </a>
            </div>
            <div className="_activity-card-divider"></div>
            <div className="_activity-card-main">
                <img
                    className="_activity-card-avatar"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                    alt="avatar image"
                />
                <p className="_activity-card-description">
                    Amanda, Jeff and 5 others are following you
                </p>
            </div>
        </div>
    );
}

export default activityCard;
