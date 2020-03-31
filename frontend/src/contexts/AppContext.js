import React, { createContext } from 'react';

const defaultValue = {
    user: null,
    notification: null
}

const AppContext = createContext({});

export { AppContext, defaultValue };

export default AppContext