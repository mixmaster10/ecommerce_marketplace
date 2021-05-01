import React from 'react';
import LoggedInCard from '../../components/shared/widgets/LoggedInCard';
import BasicWidget from '../../components/shared/widgets/BasicWidget';
import AlexHeader from '../../components/shared/headers/AlexHeader';
import { connect } from 'react-redux';
import { loadPhotosWidgetData } from '../../store/user/photosWidget/action';
import { bindActionCreators } from 'redux';
import relatedGroups from '../../components/home/data/relatedGroups.json';
import photos from '../../components/home/data/photosCard.json'
import GroupFeedCover from './GroupFeedCover';
import InteractCard from '../../components/shared/widgets/interactCard';
import FeedPosts from './FeedPosts';
import GroupInfo from './GroupInfo';
import GroupAdmin from './GroupAdmin';
import GroupAbout from './GroupAbout';

const GroupFeed = (props) => {
    props.loadPhotosWidgetData(photos);
    return (
        <div>
         <AlexHeader />
        <div className="group-feed-wrapper">
            <div className="white-space"></div>
           <div className="group-feed-left-sidebar">
           <div className="__card">
                <LoggedInCard {...props} />
            </div>
            <BasicWidget type='photos' rows={props.widgetPhotos} title='Related Activities' />
            <BasicWidget type='2-column-row-img' rows={relatedGroups} title='Related Groups'/>
           </div>
           <div className="group-feed-main-wrapper">
                <GroupFeedCover />
                <div className="group-feed-inner-wrapper">
                    <div className="group-post-wrapper">
                        <InteractCard />
                        <FeedPosts />
                    </div>
                    <div className="group-feed-right-sidebar right-sidebar sidebar">
                        <GroupInfo />
                        <GroupAbout />
                        <GroupAdmin />
                    </div>
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

export default connect(mapStateToProps, matchDispatchToProps)(GroupFeed);
