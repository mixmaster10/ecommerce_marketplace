import React from 'react';
import convertFollowers from '../../helpers/convertFollowers';

function CategoryCard({ category }) {
    return (
        <div className="___category-card">
            <div className="___top">
                <img src={category ? category.image : null} alt="" />
            </div>
            <div className="___bottom">
                <h5>{category ? category.name : null}</h5>
                <p>
                    {category
                        ? `${category.sameCategory} ${category.name} stores`
                        : null}
                </p>
                <p>
                    {category
                        ? `${convertFollowers(category.products)} Products`
                        : null}
                </p>
                <p>
                    {category
                        ? `${convertFollowers(category.followers)} Followers`
                        : null}
                </p>
            </div>
        </div>
    );
}

export default CategoryCard;
