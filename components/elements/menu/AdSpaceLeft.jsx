import React from 'react';

const spacing = {
    height: '1rem'
}

const textStyle = {
    color: 'white',
    lineHeight: '0.5rem',
    fontWeight: '250',
    fontSize: '1.2rem',
    fontStyle: 'italic'
}

const AdSpaceLeft = () => (
    <div style={{maxWidth: '180px'}}>
        <div style={spacing}></div>
        <p style={textStyle}>A Carribean & Latin American</p>
        <p style={textStyle}>marketplace for all your needs</p>
    </div>
);

export default AdSpaceLeft