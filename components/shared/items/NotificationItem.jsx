import React from 'react';
import StackedAvatar from './StackedAvatar';

function NotificationItem({ notification }) {
    return notification ? (
        <div
            className={`___notification-item ${
                notification.unread ? '___unread' : null
            }`}>
            <div className="main-div">
                {notification?.avatars ? (
                    <StackedAvatar
                        maxAvatars={2}
                        round={true}
                        size={40}
                        avatars={notification.avatars}
                    />
                ) : null}

                <p>
                    {notification.friend ? (
                        <a href={notification.friendLink}>
                            {notification.friend}{' '}
                        </a>
                    ) : null}
                    {notification.text}
                </p>
            </div>
            {notification.image ? (
                <img src={notification.image} alt="" />
            ) : (
                <div className="div"></div>
            )}
            <div className="timestamp-div">
                <p className="timestamp">{notification.timeStamp}</p>
                <p className="arrow">{'>'}</p>
            </div>
        </div>
    ) : null;
}

export default NotificationItem;
