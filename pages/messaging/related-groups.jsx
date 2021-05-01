import React, { useEffect } from 'react';

const ChatRelatedGroups = () => {
    
    return (
        <div className="chat-related-groups">
            <div className="related-groups-widget">
                <h4 className="widget-title">Related Groups</h4>
                <div className="related-groups">
                  <span className="groups-img"><img src="https://images.unsplash.com/photo-1589935525759-6e7aa4b63d3d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" /></span>
                  <span className="groups-info">
                    <span className="groups-name">Women's Fashion</span>
                    <span className="followers">500k Followers</span>
                  </span>
                </div>

                <div className="related-groups">
                  <span className="groups-img"><img src="https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" /></span>
                  <span className="groups-info">
                    <span className="groups-name">Men's Fashion</span>
                    <span className="followers">200k Followers</span>
                  </span>
                </div>


                <div className="related-groups">
                  <span className="groups-img"><img src="https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" /></span>
                  <span className="groups-info">
                    <span className="groups-name">Women's Jewelry</span>
                    <span className="followers">200k Followers</span>
                  </span>
                </div>

                <div className="related-groups">
                  <span className="groups-img"><img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1365&q=80" /></span>
                  <span className="groups-info">
                    <span className="groups-name">Makeup</span>
                    <span className="followers">200k Followers</span>
                  </span>
                </div>
              </div>
        </div>
    );
};

export default ChatRelatedGroups;
