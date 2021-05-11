import React from 'react';
import { Row, Col } from 'antd';

const NormalPost = (props) => {
    return (
        <div className="post-normal-wrapper">
            <div className="post-upper">
                <div className="post-user-info">
                    <div className="post-user-detail">
                        <div className="post-user-avtar">
                            <img src="/static/img/feed/avtar.png" />
                        </div>
                        <div className="post-user-meta">
                            <h5>Grace Zhang</h5>
                            <p>20 May at 09:28 PM</p>
                        </div>
                    </div>
                    <div className="post-user-action">
                        <img src="/static/img/feed/ic_More.svg" />
                    </div>
                </div>
                <div className="post-user-desc">
                    <p>Here is the post,Here is the post,Here is the post,Here is the postHere is the postHere is the postHere is the postHere is the postHere is the post</p>
                </div>
                <div className="post-user-images">
                    <Row gutter={30}>
                        <Col span={12}>
                            <img src="/static/img/feed/post-1.png" />
                        </Col>
                        <Col span={12}>
                            <div className="post-user-half-image mb-5">
                                <img src="/static/img/feed/post-2.png" />
                            </div>
                            <div className="post-user-half-image">
                                <img src="/static/img/feed/post-3.png" />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="post-action-wrapper">
                    <div className="post-action">
                        <img src="/static/img/feed/ic_comment.svg" />
                        <p>25 Comments</p>
                    </div>
                    <div className="post-action">
                        <img src="/static/img/feed/ic_like.svg" />
                        <p>120k Likes</p>
                    </div>
                    <div className="post-action">
                        <img src="/static/img/feed/ic_Share.svg" />
                        <p>231 Share</p>
                    </div>
                    <div className="post-action">
                        <img src="/static/img/feed/ic_Saved.svg" />
                        <p>12 Saved</p>
                    </div>
                </div>
            </div>
            <div className="post-footer">
                <div className="post-user-avtar">
                    <img src="/static/img/feed/avtar.png" />
                </div>
                <div className="post-comment">
                    <div className="post-comment-box">
                        <input type="text" placeholder="Write your comment…" />
                        <div className="actions">
                        <img src="/static/img/feed/ic_Emoticon.svg" />
                        <img src="/static/img/feed/ic_Image.svg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default NormalPost;
