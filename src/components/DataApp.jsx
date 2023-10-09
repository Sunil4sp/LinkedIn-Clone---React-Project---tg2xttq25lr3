import React, { useEffect, useState } from 'react';

export const DataAppContext = React.createContext();

const DataApp = (props) => {

    const initialState = {
        loginStatus: !!localStorage.getItem('user'), //false means not logged in
        name: '',   //name
        username: '', //username
        password:'', //password
    }
    const [appState, setAppState] = useState(initialState);

    useEffect(() => {
        console.log('Context Data - ', appState);
    }, [appState])

    return (
        <>
            <DataAppContext.Provider value={{appState, setAppState }}>
                {props.children}
            </DataAppContext.Provider>

        </>
    )
}

export default DataApp;