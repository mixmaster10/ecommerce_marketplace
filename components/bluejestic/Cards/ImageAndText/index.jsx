import React from 'react'


function ImageAndText(props) {
    return (
        <div className="imageAndText">
            <img src={props.image}/>
            <p>{props.title}</p>
        </div>
    )
}

export default ImageAndText
