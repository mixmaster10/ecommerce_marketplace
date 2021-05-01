import React from 'react';
import Link from 'next/link';
import Carousel from '../../../../../../../pages/carousel'
import TabbedItems from './components/TabbedItems'

function SingleTopAd(props) {
    const headerLinks = props.data.links.map((link, index) => {
        return(
            <Link href={link.link || '/'} key={index}>
                <a>{link.text}</a>
            </Link>
        ) 
    });
    
    return(
        <div className="__single-top-ad">
            <h1 className="__landing-title">{props.data.title}<span>{headerLinks}</span></h1>
            <div className='__carousel'>
                <Carousel cards={props.data.bigImg} numSlides='1' />
            </div>
            <TabbedItems newArrivals= {props.data.newArrivals} bestSellers={props.data.bestSellers} sale={props.data.sale} />
        </div>
    )
};

export default SingleTopAd;
