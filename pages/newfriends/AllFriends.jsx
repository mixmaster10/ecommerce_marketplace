import React from 'react';
import { Tabs, Row, Col } from 'antd';
import FriendsSingle from './FriendsSingle';

const { TabPane } = Tabs;


const AllFriends = (props) => {
    return (
        <div className="all-friends-wrapper">
            <Tabs defaultActiveKey="1" centered>
                <TabPane tab="All Friends" key="1">
                    <Row gutter={30}>
                        <Col className="gutter-row" span={8}>
                            <FriendsSingle
                                profile="/static/img/friends/01.png"
                                name="Alice Miller"
                                location="Orlando, Fl"
                                friends="56"
                                stores="37"
                            />
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <FriendsSingle
                                profile="/static/img/friends/02.png"
                                name="Alice Miller"
                                location="Orlando, Fl"
                                friends="56"
                                stores="37"
                            />
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <FriendsSingle
                                profile="/static/img/friends/03.png"
                                name="Alice Miller"
                                location="Orlando, Fl"
                                friends="56"
                                stores="37"
                            />
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <FriendsSingle
                                profile="/static/img/friends/01.png"
                                name="Alice Miller"
                                location="Orlando, Fl"
                                friends="56"
                                stores="37"
                            />
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <FriendsSingle
                                profile="/static/img/friends/02.png"
                                name="Alice Miller"
                                location="Orlando, Fl"
                                friends="56"
                                stores="37"
                            />
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <FriendsSingle
                                profile="/static/img/friends/03.png"
                                name="Alice Miller"
                                location="Orlando, Fl"
                                friends="56"
                                stores="37"
                            />
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <FriendsSingle
                                profile="/static/img/friends/01.png"
                                name="Alice Miller"
                                location="Orlando, Fl"
                                friends="56"
                                stores="37"
                            />
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <FriendsSingle
                                profile="/static/img/friends/02.png"
                                name="Alice Miller"
                                location="Orlando, Fl"
                                friends="56"
                                stores="37"
                            />
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <FriendsSingle
                                profile="/static/img/friends/03.png"
                                name="Alice Miller"
                                location="Orlando, Fl"
                                friends="56"
                                stores="37"
                            />
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tab="Recently Added" key="2">
                    <Row gutter={30}>
                        <Col className="gutter-row" span={8}>
                            <FriendsSingle
                                profile="/static/img/friends/01.png"
                                name="Alice Miller"
                                location="Orlando, Fl"
                                friends="56"
                                stores="37"
                            />
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <FriendsSingle
                                profile="/static/img/friends/02.png"
                                name="Alice Miller"
                                location="Orlando, Fl"
                                friends="56"
                                stores="37"
                            />
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <FriendsSingle
                                profile="/static/img/friends/03.png"
                                name="Alice Miller"
                                location="Orlando, Fl"
                                friends="56"
                                stores="37"
                            />
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <FriendsSingle
                                profile="/static/img/friends/01.png"
                                name="Alice Miller"
                                location="Orlando, Fl"
                                friends="56"
                                stores="37"
                            />
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <FriendsSingle
                                profile="/static/img/friends/02.png"
                                name="Alice Miller"
                                location="Orlando, Fl"
                                friends="56"
                                stores="37"
                            />
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <FriendsSingle
                                profile="/static/img/friends/03.png"
                                name="Alice Miller"
                                location="Orlando, Fl"
                                friends="56"
                                stores="37"
                            />
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <FriendsSingle
                                profile="/static/img/friends/01.png"
                                name="Alice Miller"
                                location="Orlando, Fl"
                                friends="56"
                                stores="37"
                            />
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <FriendsSingle
                                profile="/static/img/friends/02.png"
                                name="Alice Miller"
                                location="Orlando, Fl"
                                friends="56"
                                stores="37"
                            />
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <FriendsSingle
                                profile="/static/img/friends/03.png"
                                name="Alice Miller"
                                location="Orlando, Fl"
                                friends="56"
                                stores="37"
                            />
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tab="Family" key="3">
                    <Row gutter={30}>
                        <Col className="gutter-row" span={8}>
                            <FriendsSingle
                                profile="/static/img/friends/01.png"
                                name="Alice Miller"
                                location="Orlando, Fl"
                                friends="56"
                                stores="37"
                            />
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <FriendsSingle
                                profile="/static/img/friends/02.png"
                                name="Alice Miller"
                                location="Orlando, Fl"
                                friends="56"
                                stores="37"
                            />
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <FriendsSingle
                                profile="/static/img/friends/03.png"
                                name="Alice Miller"
                                location="Orlando, Fl"
                                friends="56"
                                stores="37"
                            />
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <FriendsSingle
                                profile="/static/img/friends/01.png"
                                name="Alice Miller"
                                location="Orlando, Fl"
                                friends="56"
                                stores="37"
                            />
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <FriendsSingle
                                profile="/static/img/friends/02.png"
                                name="Alice Miller"
                                location="Orlando, Fl"
                                friends="56"
                                stores="37"
                            />
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <FriendsSingle
                                profile="/static/img/friends/03.png"
                                name="Alice Miller"
                                location="Orlando, Fl"
                                friends="56"
                                stores="37"
                            />
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <FriendsSingle
                                profile="/static/img/friends/01.png"
                                name="Alice Miller"
                                location="Orlando, Fl"
                                friends="56"
                                stores="37"
                            />
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <FriendsSingle
                                profile="/static/img/friends/02.png"
                                name="Alice Miller"
                                location="Orlando, Fl"
                                friends="56"
                                stores="37"
                            />
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <FriendsSingle
                                profile="/static/img/friends/03.png"
                                name="Alice Miller"
                                location="Orlando, Fl"
                                friends="56"
                                stores="37"
                            />
                        </Col>
                    </Row>
                </TabPane>
            </Tabs>
        </div>
    );
};


export default AllFriends;
