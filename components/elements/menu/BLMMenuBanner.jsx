import React from 'react';

const containerStyle = {
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // height: '3rem',
};

const textStyle = {
    color: 'white',
    fontWeight: '500',
};

const BLMMenuBanner = () => (
    <div style={containerStyle}>
        <strong style={textStyle}>
            Bluejestic stands in solidarity with the Movement for Black lives!
            #BLM
        </strong>
    </div>
);

export default BLMMenuBanner;
