import React from 'react';

const ConsoleLog = ({ children }) => {
    console.log(children);
    return false;
};

export default ConsoleLog