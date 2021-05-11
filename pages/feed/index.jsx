import React, { useEffect, useState } from 'react';
import AlexHeader from '../../components/shared/headers/AlexHeader';
import LeftSidebar from '../../components/shared/left-sidebar/LeftSidebar';
import { Row, Col } from 'antd';
import FindFriends from './findFriends';
import PostSomething from './postSomething';
import NormalPost from './normalPost';
import DealPost from './dealPost';
import DoubleDeal from './doubleDeal';
import HighLights from './highLights';
import SuggesstedGroups from './suggestedGroups';
import Friends from './friends';

const NewFeedPage = (props) => {

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
    window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 20);
    });
    }, []);


    return (
        <div>
            <AlexHeader />
            <div className="feed-wrapper">
                <Row gutter={30}>
                    <Col className="gutter-row" span={5}>
                        <div className={scroll ? "feed-left-sidebar sticky" : "feed-left-sidebar"}>
                            <LeftSidebar />
                            <FindFriends />
                        </div>
                    </Col>
                    <Col className="gutter-row" span={14}>
                        <div className="feed-main-wrapper">
                            <PostSomething />
                            <NormalPost />
                            <NormalPost />
                            <DealPost title="TV Deals" />
                            <NormalPost />
                            <DealPost title="From Sportsabc" />
                            <NormalPost />
                            <DoubleDeal title="Deals from Sportsabc" />
                        </div>
                    </Col>
                    <Col className="gutter-row" span={5}>
                        <div className={scroll ? "feed-right-sidebar sticky" : "feed-right-sidebar"}>
                            <HighLights title="Hightlights" />
                            <SuggesstedGroups title="Suggessted Group" />
                            <Friends title="Friends" />
                        </div>
                    </Col>
                </Row>


            </div>
        </div>
    );
};


export default NewFeedPage;
