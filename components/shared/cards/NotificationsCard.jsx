import React from 'react';
import NotificationItem from '../items/NotificationItem';

function NotificationsCard({ notifications }) {
    return (
        <div className="___notifications-card">
            <h4>All Notifications</h4>
            {notifications.map((notification, i) => (
                <NotificationItem key={i} notification={notification} />
            ))}
        </div>
    );
}

export default NotificationsCard;
