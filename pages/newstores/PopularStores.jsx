import React from 'react';
import Slider from 'react-slick';
import StoreSingle from './StoreSingle';
import { Tabs, Row, Col } from 'antd';

const { TabPane } = Tabs;


const PopularStores = (props) => {

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 750,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        centerMode: true,
    };


    return (
        <div className="store-popular-wrapper">
            <div className="title-wrapper">
                <div>
                    <h5>Popular Store</h5>
                    <p>Browse by trending Stores</p>
                </div>
            </div>
            <div className="suggested-stores-inner-wrapper">
                <Slider {...settings} className="owl-carousel">
                    <div className="item">
                        <StoreSingle
                            cover="https://images.unsplash.com/photo-1622557850710-d08a111d3476?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&h=400&q=80"
                            userprofile="/static/img/stores/01.png"
                            name="Jane’s Store"
                            location="Queens, NY"
                            description="Fine crafted jewelry made with the environment in mind."
                            followers="3k"
                            products="287"
                        />
                    </div>
                    <div className="item">
                        <StoreSingle
                            cover="https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80"
                            userprofile="/static/img/stores/02.png"
                            name="Nu Star Fashion"
                            location="Brooklyn, NY"
                            description="Fine crafted jewelry made with the environment in mind."
                            followers="3k"
                            products="287"
                        />
                    </div>
                    <div className="item">
                        <StoreSingle
                            cover="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                            userprofile="/static/img/stores/03.png"
                            name="Up Town Pastry"
                            location="Lakeland, Fl"
                            description="Fine crafted jewelry made with the environment in mind."
                            followers="3k"
                            products="287"
                        />
                    </div>
                    <div className="item">
                        <StoreSingle
                            cover="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1140&q=80"
                            userprofile="/static/img/stores/04.png"
                            name="City Art"
                            location="Lakeland, Fl"
                            description="Fine crafted jewelry made with the environment in mind."
                            followers="3k"
                            products="287"
                        />
                    </div>
                </Slider>
            </div>
            <div className="store-saved-wrapper">
                <Tabs defaultActiveKey="1" centered>
                    <TabPane tab="All saved Stores" key="1">
                        <Row gutter={30}>
                            <Col className="gutter-row" span={8}>
                                <StoreSingle
                                    cover="https://images.unsplash.com/photo-1622557850710-d08a111d3476?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&h=400&q=80"
                                    userprofile="/static/img/stores/01.png"
                                    name="Jane’s Store"
                                    location="Queens, NY"
                                    description="Fine crafted jewelry made with the environment in mind."
                                    followers="3k"
                                    products="287"
                                />
                            </Col>
                            <Col className="gutter-row" span={8}>
                                <StoreSingle
                                    cover="https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80"
                                    userprofile="/static/img/stores/02.png"
                                    name="Nu Star Fashion"
                                    location="Brooklyn, NY"
                                    description="Fine crafted jewelry made with the environment in mind."
                                    followers="3k"
                                    products="287"
                                />
                            </Col>
                            <Col className="gutter-row" span={8}>
                                <StoreSingle
                                    cover="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                                    userprofile="/static/img/stores/03.png"
                                    name="Up Town Pastry"
                                    location="Lakeland, Fl"
                                    description="Fine crafted jewelry made with the environment in mind."
                                    followers="3k"
                                    products="287"
                                />
                            </Col>
                            <Col className="gutter-row" span={8}>
                                <StoreSingle
                                    cover="https://images.unsplash.com/photo-1622557850710-d08a111d3476?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&h=400&q=80"
                                    userprofile="/static/img/stores/01.png"
                                    name="Jane’s Store"
                                    location="Queens, NY"
                                    description="Fine crafted jewelry made with the environment in mind."
                                    followers="3k"
                                    products="287"
                                />
                            </Col>
                            <Col className="gutter-row" span={8}>
                                <StoreSingle
                                    cover="https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80"
                                    userprofile="/static/img/stores/02.png"
                                    name="Nu Star Fashion"
                                    location="Brooklyn, NY"
                                    description="Fine crafted jewelry made with the environment in mind."
                                    followers="3k"
                                    products="287"
                                />
                            </Col>
                            <Col className="gutter-row" span={8}>
                                <StoreSingle
                                    cover="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                                    userprofile="/static/img/stores/03.png"
                                    name="Up Town Pastry"
                                    location="Lakeland, Fl"
                                    description="Fine crafted jewelry made with the environment in mind."
                                    followers="3k"
                                    products="287"
                                />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tab="Recently Added" key="2">
                    <Row gutter={30}>
                            <Col className="gutter-row" span={8}>
                                <StoreSingle
                                    cover="https://images.unsplash.com/photo-1622557850710-d08a111d3476?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&h=400&q=80"
                                    userprofile="/static/img/stores/01.png"
                                    name="Jane’s Store"
                                    location="Queens, NY"
                                    description="Fine crafted jewelry made with the environment in mind."
                                    followers="3k"
                                    products="287"
                                />
                            </Col>
                            <Col className="gutter-row" span={8}>
                                <StoreSingle
                                    cover="https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80"
                                    userprofile="/static/img/stores/02.png"
                                    name="Nu Star Fashion"
                                    location="Brooklyn, NY"
                                    description="Fine crafted jewelry made with the environment in mind."
                                    followers="3k"
                                    products="287"
                                />
                            </Col>
                            <Col className="gutter-row" span={8}>
                                <StoreSingle
                                    cover="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                                    userprofile="/static/img/stores/03.png"
                                    name="Up Town Pastry"
                                    location="Lakeland, Fl"
                                    description="Fine crafted jewelry made with the environment in mind."
                                    followers="3k"
                                    products="287"
                                />
                            </Col>
                            <Col className="gutter-row" span={8}>
                                <StoreSingle
                                    cover="https://images.unsplash.com/photo-1622557850710-d08a111d3476?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&h=400&q=80"
                                    userprofile="/static/img/stores/01.png"
                                    name="Jane’s Store"
                                    location="Queens, NY"
                                    description="Fine crafted jewelry made with the environment in mind."
                                    followers="3k"
                                    products="287"
                                />
                            </Col>
                            <Col className="gutter-row" span={8}>
                                <StoreSingle
                                    cover="https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80"
                                    userprofile="/static/img/stores/02.png"
                                    name="Nu Star Fashion"
                                    location="Brooklyn, NY"
                                    description="Fine crafted jewelry made with the environment in mind."
                                    followers="3k"
                                    products="287"
                                />
                            </Col>
                            <Col className="gutter-row" span={8}>
                                <StoreSingle
                                    cover="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                                    userprofile="/static/img/stores/03.png"
                                    name="Up Town Pastry"
                                    location="Lakeland, Fl"
                                    description="Fine crafted jewelry made with the environment in mind."
                                    followers="3k"
                                    products="287"
                                />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tab="Favorite" key="3">
                    <Row gutter={30}>
                    <Col className="gutter-row" span={8}>
                                <StoreSingle
                                    cover="https://images.unsplash.com/photo-1622557850710-d08a111d3476?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&h=400&q=80"
                                    userprofile="/static/img/stores/01.png"
                                    name="Jane’s Store"
                                    location="Queens, NY"
                                    description="Fine crafted jewelry made with the environment in mind."
                                    followers="3k"
                                    products="287"
                                />
                            </Col>
                            <Col className="gutter-row" span={8}>
                                <StoreSingle
                                    cover="https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80"
                                    userprofile="/static/img/stores/02.png"
                                    name="Nu Star Fashion"
                                    location="Brooklyn, NY"
                                    description="Fine crafted jewelry made with the environment in mind."
                                    followers="3k"
                                    products="287"
                                />
                            </Col>
                            <Col className="gutter-row" span={8}>
                                <StoreSingle
                                    cover="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                                    userprofile="/static/img/stores/03.png"
                                    name="Up Town Pastry"
                                    location="Lakeland, Fl"
                                    description="Fine crafted jewelry made with the environment in mind."
                                    followers="3k"
                                    products="287"
                                />
                            </Col>
                            <Col className="gutter-row" span={8}>
                                <StoreSingle
                                    cover="https://images.unsplash.com/photo-1622557850710-d08a111d3476?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&h=400&q=80"
                                    userprofile="/static/img/stores/01.png"
                                    name="Jane’s Store"
                                    location="Queens, NY"
                                    description="Fine crafted jewelry made with the environment in mind."
                                    followers="3k"
                                    products="287"
                                />
                            </Col>
                            <Col className="gutter-row" span={8}>
                                <StoreSingle
                                    cover="https://images.unsplash.com/photo-1588392382834-a891154bca4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80"
                                    userprofile="/static/img/stores/02.png"
                                    name="Nu Star Fashion"
                                    location="Brooklyn, NY"
                                    description="Fine crafted jewelry made with the environment in mind."
                                    followers="3k"
                                    products="287"
                                />
                            </Col>
                            <Col className="gutter-row" span={8}>
                                <StoreSingle
                                    cover="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                                    userprofile="/static/img/stores/03.png"
                                    name="Up Town Pastry"
                                    location="Lakeland, Fl"
                                    description="Fine crafted jewelry made with the environment in mind."
                                    followers="3k"
                                    products="287"
                                />
                            </Col>
                            
                        </Row>
                    </TabPane>
                </Tabs>
            </div>
        </div>
    );
};


export default PopularStores;
