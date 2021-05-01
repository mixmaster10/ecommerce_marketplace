import React, { Component } from 'react';
import Link from 'next/link';

const ActivityRow = (props) => (
    <div className="__activity-row" key={props.id}>
        <div>{props.time || '30 Days Ago'}</div>
        <div className='__activity-comment'>
            {props.text || '"Posted your status. "Hello guys, how are you?"'}
            <span>
                <Link href={props.link || '/'}>
                    <a className="__add-link">{props.linkText || ''}</a>
                </Link>
            </span>
        </div>
    </div>
);

export default ActivityRow;
