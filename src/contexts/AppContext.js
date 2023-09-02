import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [orders, setOrders] = useState([]);
    // You can add more global states here, like user data, cart, etc.

    return (
        <AppContext.Provider value={{ orders, setOrders }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
