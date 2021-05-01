import React from 'react';

function AdCard(props) {
    return (
        <div>
            <img
                src={
                    props.url ||
                    'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                }
            />
        </div>
    );
}

export default AdCard;