import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    getPosts,
    getRecentPosts,
    getFeaturedPost,
    getPostCategories,
} from '../../../store/post/action';
import PostSmallThumbnail from '../../elements/post/PostSmallThumbnail';
import Sidebar from './modules/Sidebar';

class BlogSidebar extends Component {
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
        const { layout, featuredPost, categories, recentPost } = this.props;
        let gridPosts;
        if (this.props) {
            gridPosts = this.props.posts;
        }
        return (
            <div className={layout === 'left' ? 'ps-blog--sidebar reverse' : 'ps-blog--sidebar'}>
                <div className="ps-blog__left">
                    <div className="row">
                        {gridPosts &&
                            gridPosts.map(post => {
                                return <PostSmallThumbnail data={post} key={post.id} />;
                            })}
                    </div>
                    <div className="ps-pagination">
                        <ul className="pagination">
                            <li className="active">
                                <a href="#">1</a>
                            </li>
                            <li>
                                <a href="#">2</a>
                            </li>
                            <li>
                                <a href="#">3</a>
                            </li>
                            <li>
                                <a href="#">
                                    Next Page
                                    <i className="icon-chevron-right"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
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
export default connect(mapStateToProps)(BlogSidebar);
