import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadPhotosWidgetData } from '../../../store/user/photosWidget/action';
import BasicWidget from '../../shared/widgets/BasicWidget';
import LoggedInCard from '../../shared/widgets/LoggedInCard';
import photos from '../data/photosCard.json';
import relatedGroups from '../data/relatedGroups.json';

function LeftContent(props) {
    props.loadPhotosWidgetData(photos);
    return (
        <div className="__home-card-left">
            <div className="__card">
                <LoggedInCard {...props} />
            </div>
            <BasicWidget
                type="photos"
                rows={props.widgetPhotos}
                title="Related Activities"
            />
            <BasicWidget
                type="2-column-row-img"
                rows={relatedGroups}
                title="Related Groups"
                link="/groups"
            />
        </div>
    );
}

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

export default connect(mapStateToProps, matchDispatchToProps)(LeftContent);
