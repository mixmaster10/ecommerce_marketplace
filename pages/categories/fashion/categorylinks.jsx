import React from 'react';

const CategoryLinks = (props) => {
    return (
        <div className="blog-category-links">
            <ul>
                <li className="watches">
                    <a href="#"><p>Watches</p> <span className="arrow"> > </span></a>
                </li>
                <li className="jewelry">
                    <a href="#"><p>Jewelry</p> <span className="arrow"> > </span></a>
                </li>
                <li className="men-shoes">
                    <a href="#"><p>Men's Shoes</p> <span className="arrow"> > </span></a>
                </li>
                <li className="women-shoes">
                    <a href="#"><p>Women's Shoes</p> <span className="arrow"> > </span></a>
                </li>
                <li className="hand-bags">
                    <a href="#"><p>Hand Bag's</p> <span className="arrow"> > </span></a>
                </li>
            </ul>
        </div>
    );
};

export default CategoryLinks;
