import React from 'react';

const countContext = React.createContext(
    {
        count : 0,
        incrementCount : ()=>{},
    }
);

export default countContext;