import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext(undefined);

export function UserProvider({ children }) {
    const [username, setUsername] = useState(null); 
    const [popUpExists, setPopUpExists] = useState(false);

    return (
        <UserContext.Provider value={{ username, setUsername, popUpExists, setPopUpExists }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUserContext() {
    const user = useContext(UserContext);

    if (user === undefined) {
        throw new Error('username is undefined (not wrapped)');
    }

    return user;
}
