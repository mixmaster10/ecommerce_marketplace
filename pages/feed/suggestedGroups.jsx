import React from 'react';
import SingleGroup from './singleGroup';

const SuggesstedGroups = ({ title }) => {
    return (
        <div className="suggested-group-wrapper mb-5">
            <div className="title-wrapper d-flex justify-content-between">
                <h5>{title}</h5>
                <p>
                    <img src="/static/img/feed/ic_More.svg" />
                </p>
            </div>
            <div className="group-items divider">
                <div className="mb-4">
                    <SingleGroup
                        img="/static/img/feed/group-01.png"
                        name="Geometrik design"
                        followers="5"
                    />
                </div>
                <SingleGroup
                    img="/static/img/feed/group-02.png"
                    name="Yellow Leaf Hammocks"
                    followers="2"
                />
            </div>
            <div className="group-items">
                <div className="mb-4">
                    <SingleGroup
                        img="/static/img/feed/group-03.png"
                        name="Geometrik design"
                        followers="5"
                    />
                </div>
                <SingleGroup
                    img="/static/img/feed/group-04.png"
                    name="Yellow Leaf Hammocks"
                    followers="2"
                />
            </div>
            <div className="groups-btn">
                <a href="#" className="btn-groups">See All</a>
            </div>
        </div>
    );
};


export default SuggesstedGroups;
