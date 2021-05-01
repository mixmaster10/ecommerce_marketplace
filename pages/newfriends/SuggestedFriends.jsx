import React from 'react';
import { Tabs } from 'antd';
import Slider from 'react-slick';
import FriendsSingle from './FriendsSingle';

const { TabPane } = Tabs;


   
    const SuggestedFriends = (props) => {

        const settings = {
            dots: false,
            arrows: true,
            infinite: true,
            speed: 750,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 10000,
        };
    
        return (
            <div className="friends-suggested-wrapper">
                <div className="suggested-friends-inner-wrapper">
                    <Tabs defaultActiveKey="1" centered>
                        <TabPane tab="Suggested Friends" key="1">
                            <Slider {...settings} className="owl-carousel">
                                <div className="item">
                                    <FriendsSingle
                                        profile="/static/img/friends/01.png"
                                        name="Alice Miller"
                                        location="Orlando, Fl"
                                        friends="56"
                                        stores="37"
                                    />
                                </div>
                                <div className="item">
                                <FriendsSingle
                                        profile="/static/img/friends/02.png"
                                        name="Alice Miller"
                                        location="Orlando, Fl"
                                        friends="56"
                                        stores="37"
                                    />
                                </div>
                                <div className="item">
                                <FriendsSingle
                                        profile="/static/img/friends/03.png"
                                        name="Alice Miller"
                                        location="Orlando, Fl"
                                        friends="56"
                                        stores="37"
                                    />
                                </div>
                                <div className="item">
                                <FriendsSingle
                                        profile="/static/img/friends/04.png"
                                        name="Alice Miller"
                                        location="Orlando, Fl"
                                        friends="56"
                                        stores="37"
                                    />
                                </div>
                            </Slider>
                        </TabPane>
                        <TabPane tab="Friend Requests" key="2">
                            <Slider {...settings} className="owl-carousel">
                                <div className="item">
                                <FriendsSingle
                                        profile="/static/img/friends/01.png"
                                        name="Alice Miller"
                                        location="Orlando, Fl"
                                        friends="56"
                                        stores="37"
                                    />
                                </div>
                                <div className="item">
                                <FriendsSingle
                                        profile="/static/img/friends/02.png"
                                        name="Alice Miller"
                                        location="Orlando, Fl"
                                        friends="56"
                                        stores="37"
                                    />
                                </div>
                                <div className="item">
                                <FriendsSingle
                                        profile="/static/img/friends/03.png"
                                        name="Alice Miller"
                                        location="Orlando, Fl"
                                        friends="56"
                                        stores="37"
                                    />
                                </div>
                                <div className="item">
                                <FriendsSingle
                                        profile="/static/img/friends/04.png"
                                        name="Alice Miller"
                                        location="Orlando, Fl"
                                        friends="56"
                                        stores="37"
                                    />
                                </div>
                            </Slider>
                        </TabPane>
                        <TabPane tab="Search" key="3">

                        </TabPane>
                    </Tabs>
                </div>
            </div>
        );
    };

    export default SuggestedFriends;
