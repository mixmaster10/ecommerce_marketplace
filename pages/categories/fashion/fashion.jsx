import React from 'react';
import {LikeOutlined, MessageOutlined} from '@ant-design/icons';

const CategoryFashion = (props) => {
    return (
        <div className="category-fashion-wrapper">
            <h4>Fashion</h4>
            <div className="row">
                <div className="col-sm-12">
                    <div className="blog-post big">
                        <div className="blog-post-image">
                            <img src="https://images.unsplash.com/photo-1522108098940-de49801b5b40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80" />
                        </div>
                        <div className="blog-content">
                            <span className="blog-category">Designer Brands</span>
                            <h5>Shop best Women's fashion designers</h5>
                            <p>Mercede's Lead Designer Talks to Euronews About Future</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-sm-6">
                    <div className="blog-post">
                        <div className="blog-post-image">
                            <img src="https://images.unsplash.com/photo-1593030103066-0093718efeb9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" />
                        </div>
                        <div className="blog-content">
                            <span className="blog-category">Men</span>
                            <h5>Shop best men's fashion designers</h5>
                            <div className="blog-meta-box">
                            <ul>
                                <li><LikeOutlined /> 22k</li>
                                <li><MessageOutlined /> 5k</li>
                                <li>Trending <span className="badge">+ 0.2%</span></li>
                            </ul>
                        </div>
                        </div>
                        
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="blog-post">
                        <div className="blog-post-image">
                            <img src="https://images.unsplash.com/photo-1524041255072-7da0525d6b34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" />
                        </div>
                        <div className="blog-content">
                            <span className="blog-category">Women</span>
                            <h5>Shop best Women's fashion designers</h5>
                            <div className="blog-meta-box">
                            <ul>
                                <li><LikeOutlined /> 22k</li>
                                <li><MessageOutlined /> 5k</li>
                                <li>Trending <span className="badge">+ 0.2%</span></li>
                            </ul>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-sm-6">
                    <div className="blog-post">
                        <div className="blog-post-image">
                            <img src="https://images.unsplash.com/photo-1598452963314-b09f397a5c48?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2001&q=80" />
                        </div>
                        <div className="blog-content">
                            <span className="blog-category">Beauty</span>
                            <h5>Shop best Women's fashion designers</h5>
                            <div className="blog-meta-box">
                            <ul>
                                <li><LikeOutlined /> 54k</li>
                                <li><MessageOutlined /> 7k</li>
                                <li>Trending <span className="badge">+ 0.2%</span></li>
                            </ul>
                        </div>
                        </div>
                        
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="blog-post">
                        <div className="blog-post-image">
                            <img src="https://images.unsplash.com/photo-1602313306160-9d58a1d56390?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3800&q=80" />
                        </div>
                        <div className="blog-content">
                            <span className="blog-category">Kids</span>
                            <h5>Shop best Women's fashion designers</h5>
                            <div className="blog-meta-box">
                            <ul>
                                <li><LikeOutlined /> 22k</li>
                                <li><MessageOutlined /> 5k</li>
                                <li>Trending <span className="badge">+ 0.2%</span></li>
                            </ul>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};


export default CategoryFashion;
