import Link from 'next/link';
import React from 'react';
function ParentCardContainer(props) {
    /*
    Props to pass
    title - Title of the card
    subtitle (optional) - subtitle
    children (optional)
    link: Array (optional)
    navlinks: (optional)
    */
    return (
        <div className="_groupedCards">
            <div className="_groupedCards__top">
                {props.title ? (<h3>{props.title}</h3>) : null}
                
                {props.link ? (<Link href={`/${props.link[1]}`}><a>{props.link[0]}</a></Link>) : null}
            </div>
           {props.subtitle? (<p className='_groupedCards__subtitle'>{props.subtitle}</p>) : null}
            <div className="_groupedCards__divider"></div>
           {props.navlinks? (props.navlinks) : null}


            {props.children ? (<div className="_groupedCards__children">{props.children}</div>) : null}
        </div>
    )
}

export default ParentCardContainer;
