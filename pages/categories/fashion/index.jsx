import React from 'react';
import LoggedInCard from '../../../components/shared/widgets/LoggedInCard';
import BasicWidget from '../../../components/shared/widgets/BasicWidget';
import AlexHeader from '../../../components/shared/headers/AlexHeader';
import { connect } from 'react-redux';
import { loadPhotosWidgetData } from '../../../store/user/photosWidget/action';
import { bindActionCreators } from 'redux';
import relatedGroups from '../../../components/home/data/relatedGroups.json';
import photos from '../../../components/home/data/photosCard.json'
import FashionPhotos from './photos';
import CategoryFashion from './fashion';
import CategoryLinks from './categorylinks';
import FashionTrending from './trending';
import FashionRecentPosts from './recentposts';

const FashionCategory = (props) => {
    props.loadPhotosWidgetData(photos);
    return (
        <div>
         <AlexHeader />
        <div className="fashion-category-wrapper">
            <div className="white-space"></div>
           <div className="fashion-left-sidebar">
           <div className="__card">
                <LoggedInCard {...props} />
            </div>
            <BasicWidget type='photos' rows={props.widgetPhotos} title='Related Activities' />
            <BasicWidget type='2-column-row-img' rows={relatedGroups} title='Related Groups'/>
           </div>
           <div className="fashion-main-wrapper">
               <FashionPhotos />
                <div className="fashion-blog-wrapper">
                    <CategoryFashion />
                    <CategoryLinks />
                </div>
                <FashionTrending />
                <FashionRecentPosts />
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

export default connect(mapStateToProps, matchDispatchToProps)(FashionCategory);
