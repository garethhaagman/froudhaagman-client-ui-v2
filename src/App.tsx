import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard'; // Assuming you have a Dashboard component

const App: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);

  const handleLogin = (newToken: string) => {
    setToken(newToken);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={!token ? <Login onLogin={handleLogin} /> : <Navigate replace to="/dashboard" />} />
        <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate replace to="/login" />} />
        {/* Add more routes as needed */}
        {/* Redirect to /login if no other routes are matched */}
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
