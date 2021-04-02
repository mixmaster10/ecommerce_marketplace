import React from 'react';

const ProductCategories = (props) => {
    return (
        <div className="categories-widget box-shadow __card">
            <h5 className="__landing-title">Categories</h5>
            <ul className="categories-list">
                <li><a href="#"><i className="fa fa-chevron-left"></i>Clothings, Shoes, Jewerly</a>
                    <ul>
                        <li><a href="#"><i className="fa fa-chevron-left"></i>Women</a></li>
                        <li><a href="#"><i className="fa fa-chevron-left"></i>Clothing</a>
                            <ul>
                                <li><a href="#">Dresses</a></li>
                                <li><a href="#">Casual</a></li>
                                <li><a href="#">Club & Night out</a></li>
                                <li><a href="#">Cocktail</a></li>
                                <li><a href="#">Formal</a></li>
                                <li><a href="#">Wedding Dresses</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default ProductCategories;
