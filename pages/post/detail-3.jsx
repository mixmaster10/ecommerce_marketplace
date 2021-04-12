import React from 'react';

import FooterDefault from '../../components/shared/footers/FooterDefault';
import Newletters from '../../components/partials/commons/Newletters';
import BlogDetailSidebar from '../../components/partials/blog/BlogDetailSidebar';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import BreadCrumb from '../../components/elements/BreadCrumb';

const BlogLeftSidebar = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Our Press',
        },
    ];
    return (
        <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <div className="ps-page--blog">
                <BreadCrumb breacrumb={breadCrumb} />
                <div className="container">
                    <div className="embed-responsive embed-responsive-16by9 mb-90">
                        <iframe
                            scrolling="no"
                            frameBorder="no"
                            src="https://w.soundcloud.com/player/?visual=true&amp;amp;url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F323674116&amp;amp;show_artwork=true&amp;amp;maxwidth=840&amp;amp;maxheight=1000&amp;amp;dnt=1"
                            id="fitvid0"></iframe>
                    </div>
                    <BlogDetailSidebar />
                </div>
            </div>
            <Newletters />
            <FooterDefault />
        </div>
    );
};

export default BlogLeftSidebar;
