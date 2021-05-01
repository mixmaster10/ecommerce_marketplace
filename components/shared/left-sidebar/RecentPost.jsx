import React from 'react';
import BasicWidget from '../widgets/BasicWidget';
import photos from '../../home/data/photosCard.json';
import { connect } from 'react-redux';
import { loadPhotosWidgetData } from '../../../store/user/photosWidget/action';
import { bindActionCreators } from 'redux';

const RecentPost = (props) => {
    props.loadPhotosWidgetData(photos);
    return (
        <div className="left-sidebar-recent-post">
            <BasicWidget type='recentpost' rows={props.widgetPhotos} title='Related Activities' />
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
export default connect(mapStateToProps, matchDispatchToProps)(RecentPost);
