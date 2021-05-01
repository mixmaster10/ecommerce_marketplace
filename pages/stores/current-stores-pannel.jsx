import React, { useState } from 'react';
import StoreCard from './store-card';

function CurrentStoresPannel({ stores }) {
    console.log(stores);
    const [active, setActive] = useState({
        all: true,
        recent: false,
        favorite: false,
    });

    return (
        <div className="___current-stores-pannel">
            <h4>Your Stores</h4>
            <div className="___buttons">
                <button
                    className={active.all ? '___active' : null}
                    onClick={() =>
                        setActive({
                            all: true,
                            recent: false,
                            favorite: false,
                        })
                    }>
                    All Stores <span>{stores ? stores.length : null}</span>
                </button>
                <button
                    className={active.recent ? '___active' : null}
                    onClick={() =>
                        setActive({
                            all: false,
                            recent: true,
                            favorite: false,
                        })
                    }>
                    Recently Added
                </button>
                <button
                    className={active.favorite ? '___active' : null}
                    onClick={() =>
                        setActive({
                            all: false,
                            recent: false,
                            favorite: true,
                        })
                    }>
                    Favorite Stores
                </button>
            </div>
            <div className="___current-stores-cards">
                {stores
                    ? active.all
                        ? stores.map((store, i) => (
                              <StoreCard key={i} store={store} />
                          ))
                        : active.recent
                        ? stores
                              .filter((store) => store.recentlyAdded)
                              .map((store, i) => (
                                  <StoreCard key={i} store={store} />
                              ))
                        : stores
                              .filter((store) => store.favorite)
                              .map((store, i) => (
                                  <StoreCard key={i} store={store} />
                              ))
                    : null}
            </div>
            <h3>
                <a>Load more</a>
            </h3>
        </div>
    );
}

export default CurrentStoresPannel;
