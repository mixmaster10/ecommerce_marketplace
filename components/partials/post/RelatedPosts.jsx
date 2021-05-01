import React from 'react';
import { relatedPosts } from '../../../public/static/data/posts';

import PostGrid from '../../elements/post/PostGrid';

const RelatedPosts = () => (
    <div className="ps-related-posts">
        <h3>Related Posts</h3>
        <div className="row">
            {relatedPosts.map(post => (
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12" key={post.id}>
                    <PostGrid data={post} />
                </div>
            ))}
        </div>
    </div>
);

export default RelatedPosts;
