import React from 'react';
import InfoPannelCardItem from '../items/InfoPannelCardItem';

/*
    PROPS EXPECTS:
    {
        title: string,
        dataArray: [
            {
                image: string,
                description: string
            }
        ]
    }
    REQUIRES:
    InfoPannelCardItem from '/components/shared/items/InfoPannelCardItem.jsx'
    SCSS PATH:
    /scss/bluejesticBootstrap/___components/infoPannelCard.scss
*/

function InfoPannelCard({ title, dataArray }) {
    return (
        <div className="___info-pannel-card">
            <div>
                <h4>{title ? title : null}</h4>
                <a href="">See all</a>
            </div>
            <div className="info-pannel-card-items">
                {dataArray
                    ? dataArray.map((data, i) => (
                          <InfoPannelCardItem key={i} data={data} />
                      ))
                    : null}
            </div>
        </div>
    );
}

export default InfoPannelCard;
