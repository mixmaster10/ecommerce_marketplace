import React from 'react';
import ChatMessaging from './chat-messaging';
import ChatUsers from './chats';
import LoggedInCard from '../../components/shared/widgets/LoggedInCard';
import BasicWidget from '../../components/shared/widgets/BasicWidget';
import ChatUsersOnline from './users-online';
import AlexHeader from '../../components/shared/headers/AlexHeader';
import { connect } from 'react-redux';
import { loadPhotosWidgetData } from '../../store/user/photosWidget/action';
import { bindActionCreators } from 'redux';
import relatedGroups from '../../components/home/data/relatedGroups.json';
import photos from '../../components/home/data/photosCard.json'

const ChatPage = (props) => {
    props.loadPhotosWidgetData(photos);
    return (
        <div>
         <AlexHeader />
        <div className="chat-wrapper">
            <div className="white-space"></div>
           <div className="chat-left-sidebar">
           <div className="__card">
                <LoggedInCard {...props} />
            </div>
            <BasicWidget type='photos' rows={props.widgetPhotos} title='Related Activities' />
            <BasicWidget type='2-column-row-img' rows={relatedGroups} title='Related Groups'/>
           </div>
           <div className="chat-main-wrapper">
                <ChatUsersOnline />
                <div className="chat-main-inner">
                    <ChatUsers />
                    <ChatMessaging />
                </div>
           </div>
           <div className="white-space"></div>
        </div>
        </div>
    );
};

function mapStateToProps(store) {
    return {
        widgetPhotos: store.widgetPhotos,
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        { loadPhotosWidgetData: loadPhotosWidgetData },
        dispatch
    );
}

export default connect(mapStateToProps, matchDispatchToProps)(ChatPage);
