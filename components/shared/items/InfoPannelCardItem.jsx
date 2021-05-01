import React from 'react';

/*
    PROPS EXPECTS:
    {
        data: {
            image: string,
            description: string
        }
    }
    SCSS PATH:
    /scss/bluejesticBootstrap/___components/infoPannelCardItem.scss
*/

function InfoPannelCardItem({ data }) {
    return (
        <div className="___info-pannel-card-item">
            <img src={data ? data.image : ''} alt="" />
            <p>{data ? data.description : null}</p>
        </div>
    );
}

export default InfoPannelCardItem;
