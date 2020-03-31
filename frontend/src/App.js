import React from 'react';
import './global.css';
import Routes from './routes';

import { AppContext, defaultValue } from './contexts/AppContext';

function App() {
  const userStorageData = localStorage.getItem('@be-the-hero/user');
  
  if (userStorageData) {
    defaultValue.user = JSON.parse(userStorageData);
  }

  return (
    <AppContext.Provider value={defaultValue}>
      <Routes />
    </AppContext.Provider>
  );
}

export default App;
