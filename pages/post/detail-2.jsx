import React from 'react';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import PostDetailDefault from '../../components/elements/post/PostDetail';
import RelatedPosts from '../../components/partials/post/RelatedPosts';
import PostComments from '../../components/partials/post/PostComments';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';

const PostDetail = () => {
    return (
        <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <PostDetailDefault />
            <div className="container">
                <RelatedPosts />
                <PostComments />
            </div>
            <FooterDefault />
        </div>
    );
};

export default PostDetail;
