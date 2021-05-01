import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

import NewStoreCard from './new-store-card';

function NewStoresPannel({ suggestedStores, topBrands, popularStores }) {
    const [active, setActive] = useState({
        suggested: true,
        top: false,
        popular: false,
    });

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };

    const [dbStores, setStores] = useState([]);
    useEffect( () => {
         fetch(`http://ecom-mysql.api.bluejestic.local/stores`)
        .then(resp => resp.json())
        .then(data => {
            setStores(data)
        })
    }, [])
        
    return (
        <div className="___new-stores-pannel">
            <div className="___new-stores-buttons">
                <button
                    className={active.suggested ? '___active' : null}
                    onClick={() =>
                        setActive({
                            suggested: true,
                            top: false,
                            popular: false,
                        })
                    }>
                    Suggested Stores
                </button>
                <button
                    className={active.top ? '___active' : null}
                    onClick={() =>
                        setActive({
                            suggested: false,
                            top: true,
                            popular: false,
                        })
                    }>
                    Top Brands
                </button>
                <button
                    className={active.popular ? '___active' : null}
                    onClick={() =>
                        setActive({
                            suggested: false,
                            top: false,
                            popular: true,
                        })
                    }>
                    Popular Stores
                </button>
            </div>
            <div className="___new-stores-cards">
                {dbStores ? (
                    active.suggested ? (
                        <Slider className="___slider" {...settings}>
                            {dbStores.map((store, i) => (
                                <NewStoreCard key={i} store={store} />
                            ))}
                        </Slider>
                    ) : active.top ? (
                        <Slider className="___slider" {...settings}>
                            {dbStores.map((store, i) => (
                                <NewStoreCard key={i} store={store} />
                            ))}
                        </Slider>
                    ) : (
                        <Slider className="___slider" {...settings}>
                            {dbStores.map((store, i) => (
                                <NewStoreCard key={i} store={store} />
                            ))}
                        </Slider>
                    )
                ) : null}
            </div>
        </div>
    );
}

export default NewStoresPannel;
