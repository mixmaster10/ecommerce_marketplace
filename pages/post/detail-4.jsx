import React from 'react';

import FooterDefault from '../../components/shared/footers/FooterDefault';
import Newletters from '../../components/partials/commons/Newletters';
import BlogDetailSidebar from '../../components/partials/blog/BlogDetailSidebar';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';

const BlogLeftSidebar = () => (
    <div className="site-content">
        <HeaderDefault />
        <HeaderMobile />
        <NavigationList />
        <div className="ps-page--blog">
            <div className="container">
                <BlogDetailSidebar />
            </div>
        </div>
        <Newletters />
        <FooterDefault />
    </div>
);

export default BlogLeftSidebar;
