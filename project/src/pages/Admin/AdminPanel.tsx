import React, { useState, useEffect } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';

const AdminPanel: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const adminSession = localStorage.getItem('coconutAdminSession');
    if (adminSession) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (username: string, password: string): boolean => {
    // Simple authentication - in production, this should be secure
    if (username === 'coconut' && password === 'admin2024') {
      setIsAuthenticated(true);
      localStorage.setItem('coconutAdminSession', 'true');
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('coconutAdminSession');
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return <Dashboard onLogout={handleLogout} />;
};

export default AdminPanel;