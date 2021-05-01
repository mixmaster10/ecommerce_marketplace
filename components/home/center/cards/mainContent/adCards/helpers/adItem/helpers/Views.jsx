import React, { useEffect, useState } from 'react';
import Link from 'next/link';

function Views(props) {
    const [views, updateViews] = useState(props.views);

    useEffect(() => {
        if (props.views >= 10000) {
            updateViews(`${views.toString().slice(0, 2)}k`);
        } 
        else if (props.views >= 1000) {
            let parsed = props.views / 1000;
            updateViews(`${parsed.toString().slice(0, 3)}k`);        }
    }, [views]);

    return (
        <div className="__column">
            <i class="fa fa-eye"></i>
            <div>{views}</div>
        </div>
    );
}

export default Views;
