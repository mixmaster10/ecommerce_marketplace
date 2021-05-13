import React from 'react';

const GroupAdmin = (props) => {
    return (
        <div className="widget groupadmin-widget __card">
            <h1 className="__landing-title">Group Admin</h1>
            <div className="groupadmin">
                <div className="groupadmin-bg"><img className="img-fluid" src="https://images.unsplash.com/photo-1590086783191-a0694c7d1e6e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" /></div>
                <div className="groupadmin-info">
                    <h6 className="groupadmin-name">Alex Suarez</h6>
                    <span className="groupadmin-designation">Front-End Developer</span>
                </div>
            </div>

            <div className="groupadmin">
                <div className="groupadmin-bg"><img className="img-fluid" src="https://images.unsplash.com/photo-1562003349-2483c92da7b3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" /></div>
                <div className="groupadmin-info">
                    <h6 className="groupadmin-name">Amanda</h6>
                    <span className="groupadmin-designation">Front-End Developer</span>
                </div>
            </div>

        </div>
    )
}

export default GroupAdmin;