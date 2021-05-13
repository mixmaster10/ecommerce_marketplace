import React from 'react';

const GroupFeedCover = (props) => {
    return (
        <div>
            <div className="profilecover-bg">
                <h4 className="profile-title">Electronic Group</h4>
                <a href="#" className="joined"><i className="fa fa-check-circle"></i>Joined</a>
            </div>
            <div className="profilecover-info chat-box">
                <div className="search-box">
                    <input className="form-control" type="search" placeholder="Search group" aria-label="Search" />
                    <i className="fa fa-search"></i>
                </div>

                <div className="profilepage-info">
                    <a href="#">Leave</a>
                    <a href="#"><i className="fa fa-bell"></i></a>
                    <a href="#">Pictures</a>
                    <a href="#">Videos</a>
                </div>
            </div>
        </div>
    )
}

export default GroupFeedCover;