import React from 'react';

const GroupInfo = (props) => {
    return (
        <div className="widget groupinfo-widget __card">
            <h1 className="__landing-title">Group Info</h1>
            <div className="groupinfo-content profile-content">
                <ul>
                    <li className="groupinfo-members">
                        <i className="fa fa-users"></i>
                        <span className="profile-content-title">Members</span>
                        <span className="profile-content-count">50k</span>
                    </li>
                    <li className="groupinfo-post">
                        <i className="fa fa-copy"></i>
                        <span className="profile-content-title">Post</span>
                        <span className="profile-content-count">5k</span>
                    </li>
                    <li className="groupinfo-followers">
                        <i className="fa fa-user-plus"></i>
                        <span className="profile-content-title">Followers</span>
                        <span className="profile-content-count">2k</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default GroupInfo;