import React, { useState } from 'react';
import ItemCard from './ItemCard';

function TabbedItems(props) {
    const [tab, updateTab] = useState('new-arrivals');
    const ads = props.newArrivals.map((ad, index) => {
        return <ItemCard data={ad} key={index} />;
    });

    function handleTabs(event) {
        updateTab(event.target.getAttribute('name'));
        ads();
    }

    return (
        <div className="__tabbed-items">
            <div className="__tabs-border">
                <div className="__tabs">
                    <div className="__tab __selected">
                        <div
                            onClick={handleTabs}
                            name="new-arrivals"
                            className="">
                            New Arrivals
                        </div>
                    </div>
                    <div className="__tab">
                        <div onClick={handleTabs} name="best-sellers">
                            Best Sellers
                        </div>
                    </div>
                    <div className="__tab">
                        <div onClick={handleTabs} name="sale">
                            Sale
                        </div>
                    </div>
                    <div className="__tab" />
                    <div className="__tab" />
                    <div className="__tab" />
                    <div className="__tab" />
                    <div className="__tab" />
                    <div className="__tab" />
                </div>
            </div>
            <div className="__ads">{ads}</div>
        </div>
    );
}

export default TabbedItems;
