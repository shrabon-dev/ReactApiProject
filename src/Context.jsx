// Create Context Api used name Store jsx
// Provider who give me all data or value
// Consumer or useContext 

import React, { useContext, useState } from 'react';

const ContextApi = React.createContext();

const ContextProvider = ({children}) => {

    let [value,setValue] = useState('');

    return (
        <ContextApi.Provider value={{ value,setValue }}>
            {children}
        </ContextApi.Provider>
    )
}

const useGlobalContext = () =>{
    let contextData = useContext(ContextApi);
    return (contextData);
}

export {ContextApi,ContextProvider,useGlobalContext};


