import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => { return localStorage.getItem("authToken") || ""});

  useEffect(() => {
    if (token) {
      localStorage.setItem("authToken", token);
    } else {localStorage.removeItem('authToken')}
    
  }, [token]);

  const login = (newToken) => {
    setToken(newToken);
  };

  const logout = () => {
    setToken("");
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => React.useContext(AuthContext);
