import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    getPosts,
    getRecentPosts,
    getFeaturedPost,
    getPostCategories,
} from '../../../store/post/action';
import PostDetailSidebar from '../../elements/post/PostDetailSidebar';
import Sidebar from './modules/Sidebar';

class BlogDetailSidebar extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        filterResult: null,
    };

    componentDidMount() {
        this.props.dispatch(getPosts());
        this.props.dispatch(getRecentPosts());
        this.props.dispatch(getFeaturedPost());
        this.props.dispatch(getPostCategories());
    }
    render() {
        const { layout, categories, recentPost } = this.props;
        return (
            <div
                className={
                    layout === 'left'
                        ? 'ps-blog--sidebar reverse'
                        : 'ps-blog--sidebar'
                }>
                <div className="ps-blog__left">
                    <div class="embed-responsive embed-responsive-16by9 mb-90">
                        <iframe
                            scrolling="no"
                            frameborder="no"
                            src="https://w.soundcloud.com/player/?visual=true&amp;amp;url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F323674116&amp;amp;show_artwork=true&amp;amp;maxwidth=840&amp;amp;maxheight=1000&amp;amp;dnt=1"
                            id="fitvid0"></iframe>
                    </div>
                    <PostDetailSidebar />
                </div>
                <div className="ps-blog__right">
                    <Sidebar
                        categories={categories ? categories : []}
                        recentPosts={recentPost ? recentPost : []}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state.post;
};
export default connect(mapStateToProps)(BlogDetailSidebar);
