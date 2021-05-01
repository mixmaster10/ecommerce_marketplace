import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BasicWidget from '../../../components/shared/widgets/BasicWidget';
import LoggedInCard from '../../../components/shared/widgets/LoggedInCard';
import { loadPhotosWidgetData } from '../../../store/user/photosWidget/action';
import photos from '../../home/data/photosCard.json';
import relatedGroups from '../../home/data/relatedGroups.json';
import GroupsBody from './GroupsBody';

function Groups(props) {
    props.loadPhotosWidgetData(photos);
    return (
        <>
            <div className="_page-container">
                <div className="_group-page-layout">
                    <LoggedInCard {...props} />
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

                <GroupsBody />
            </div>
        </>
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
export default connect(mapStateToProps, matchDispatchToProps)(Groups);
