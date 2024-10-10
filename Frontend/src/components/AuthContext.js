import React, { createContext, useState} from 'react';
import axios from 'axios';

export const AuthContext = createContext(); // AuthContext is not a component, it is called a context.
// when we pass in { children } to AuthProvider, children is equivalent to everything within AuthProvider.
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userEmails, setUserEmails] = useState([]);

  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:8080/api/login', {
        email,
        password,
      });
      if (response.status === 200) {
        const userData = response.data;
        const user = {
            name: userData.name,
            email: userData.email,
            password: userData.password
        };
        setUser(user);
      } else {
        console.log('Login failed:', response.status);
      }
    } catch (error) {
      console.error('Login failed:');
    }
  };

  const signup = async (name, email, password) => {
    try {
      await axios.post('http://localhost:8080/api/signup', {
        name,
        email,
        password,
      });
      setUser({name, email, password});
    } catch (error) {
      console.error('Signup failed:');
    }
  };

  const logout = () => {
    setUser(null);
  };

  const fetchUserEmails = async (recipientEmail) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/email/${recipientEmail}`);
      setUserEmails(response.data);
    } catch (error) {
      console.error('Fetching emails failed');
    }
  };
  const value = {
    user,
    userEmails,
    signup,
    login,
    logout,
    fetchUserEmails
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
