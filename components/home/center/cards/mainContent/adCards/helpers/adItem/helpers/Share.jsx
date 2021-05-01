import React, { useEffect, useState } from 'react';
import Link from 'next/link';

function Shares(props) {
    const [shares, updateShares] = useState(props.shares);

    useEffect(() => {
        if (props.shares >= 10000) {
            updateShares(`${shares.toString().slice(0, 2)}k`);
        } else if (props.shares >= 1000) {
            let parsed = props.shares / 1000;
            updateShares(`${parsed.toString().slice(0, 3)}k`);
        }
    }, [shares]);

    return (
        <div className="__column">
            <i src="" alt="stores" className="__groups fa fa-share-alt" />
            <div>{shares}</div>
        </div>
    );
}

export default Shares;
