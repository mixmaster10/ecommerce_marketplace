import React from 'react';

function AddFriendRow(props) {
    let light = '__offline-light'
    if (props.online) {
        light = '__online-light'
    }
    return(
        <div className="__add-friend-row" key={props.id}>
            <a href={props.addlink || '/'} className='__avatar-container'>
                <img
                    className="_group-card-member-avatar __whos-following-item"
                    src={
                        props.avatar ||
                        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80'
                    }
                    alt="avatar image"
                />
                <div
                    className={light}
                />
            </a>
            <p className="_group-card-member-description __friend-name">
                {props.name}
            </p>
        </div>

    )
};

export default AddFriendRow;
