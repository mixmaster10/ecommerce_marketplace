import React from 'react';
import Slider from 'react-slick';


const CategoriesSingle = ({color, image, desc, name}) => {

    return (
        <div className="categories-single-wrapper">
           <div className="category-color" style={{backgroundColor:color}}></div>
           <div className="category-details">
               <div className="category-image">
                   <img src={image} />
               </div>
               <div className="category-desc">
                   <p>{desc}</p>
                   <h5>{name}</h5>
               </div>
           </div>
        </div>
    );
};


export default CategoriesSingle;
