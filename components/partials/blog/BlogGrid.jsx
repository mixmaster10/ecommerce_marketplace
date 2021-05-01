import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPosts } from '../../../store/post/action';
import PostGrid from '../../elements/post/PostGrid';
import Link from 'next/link';

class BlogGrid extends Component {
    state = {
        filterResult: null,
    };
    componentDidMount() {
        this.props.dispatch(getPosts());
    }

    render() {
        const { posts } = this.props;
        return (
            <div className="ps-blog">
                <div className="ps-blog__header">
                    <ul className="ps-list--blog-links">
                        <li className="active">
                            <Link href="/blog">
                                <a>All</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                <a>Life Style</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                <a>Technology</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                <a>Entertaiment</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                <a>Business</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                <a>Others</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                <a>Fashion</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="ps-blog__content">
                    <div className="row">
                        {posts.length > 0 &&
                            posts.map(post => {
                                return (
                                    <div
                                        className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12"
                                        key={post.id}>
                                        <PostGrid data={post} />
                                    </div>
                                );
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
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state.post;
};
export default connect(mapStateToProps)(BlogGrid);
