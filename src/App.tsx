import React, { useState } from 'react';
import Login from './Login';

const App: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);

  const handleLogin = (newToken: string) => {
    setToken(newToken);
    // Perform post-login actions here, like redirecting to another page
  };

  return (
    <div>
      {!token ? (
        <Login onLogin={handleLogin} />
      ) : (
        <p>You are logged in!</p>
        // Render other parts of your application that require authentication
      )}
    </div>
  );
};

export default App;
