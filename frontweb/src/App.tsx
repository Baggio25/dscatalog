import { useState } from 'react';

import { AuthContextData, AuthContext } from 'AuthContext';
import Routes from 'Routes';

import './App.css';

const App = () => {
  const [authContextData, setAuthContextData] = useState<AuthContextData>({
    authenticated: false,
  });

  return (
    <AuthContext.Provider value={{ authContextData, setAuthContextData }}>
      <Routes />
    </AuthContext.Provider>
  );
};

export default App;
