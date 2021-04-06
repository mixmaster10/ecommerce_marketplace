import React, { useEffect } from 'react';

const ChatMyProfile = () => {
    
    return (
        <div className="chat-myprofile">
            <div className="profile-widget">
                <div className="profile-info">
                  <h4 className="widget-title">my Profile</h4>
                  <div className="profile-bg">
                    <span className="profile-img"><img className="img-fluid" src="https://images.unsplash.com/photo-1543165365-07232ed12fad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" /></span>
                    <span className="profile-name">Rose Marie</span>
                  </div>
                </div>
                <div className="profile-content">
                  <ul>
                    <li>
                      <i className="fa fa-home"></i>
                      <span className="profile-content-title">Stores</span>
                      <span className="profile-content-count">57</span>
                    </li>
                    <li>
                      <i className="fa fa-users"></i>
                      <span className="profile-content-title">Groups</span>
                      <span className="profile-content-count">31</span>
                    </li>
                    <li>
                      <i className="fa fa-users"></i>
                      <span className="profile-content-title">Friends</span>
                      <span className="profile-content-count">84</span>
                    </li>
                  </ul>
                </div>
               <div className="text-center follow-btn"><a href="#" className="btn btn-rounded">Follow</a></div>
              </div>
        </div>
    );
};

export default ChatMyProfile;
