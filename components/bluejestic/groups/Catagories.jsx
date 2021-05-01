import React from 'react';
import Card from '../Cards/Card';
import groupsData from '../../../public/static/data/groups-joined.json';

export default function Catagories() {
    return (
        <div>
            <div className="_catagories-container">
                <h3 className="_catagories-title">Catagories</h3>

                <div className="_catagories-subHeading-container">
                    <p className="_catagories-subtitle">
                        Find a group by browsing the top catagories
                    </p>
                    <a className="_catagories-more-info" href="">
                        See all
                    </a>
                </div>
                <div className="_catagories-card-container">
                    {groupsData.map((group) => (
                        <Card
                            key={group.id}
                            banner={group.banner}
                            catagory={group.group}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
