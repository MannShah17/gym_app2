import React, { createContext, useContext, useState } from 'react';

// Create the context
const AuthContext = createContext();

// Create the context provider
export const AuthProvider = ({ children }) => {
  // State to manage the user authentication
  const [user, setUser] = useState(null);

  // Function to handle user login
  const login = (userData) => {
    // Perform login logic, such as API calls or validation
    setUser(userData);
  };

  // Function to handle user logout
  const logout = () => {
    // Perform logout logic, such as clearing tokens or data
    setUser(null);
  };

  // Value to be provided by the context provider
  const contextValue = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

// Custom hook to access the authentication context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
