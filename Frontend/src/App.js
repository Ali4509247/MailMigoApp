import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './components/AuthContext';
import AuthPage from './components/AuthPage';
import Inbox from './components/Inbox';
import ComposeEmail from './components/ComposeEmail';
import EmailView from './components/EmailView';
import Navigation from './components/Navigation';

function App() {
  return (
    <AuthProvider>
      <Router>
        <MainApp />
      </Router>
    </AuthProvider>
  );
}

const MainApp = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <AuthPage />;
  }

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Inbox />} />
        <Route path="/compose" element={<ComposeEmail />} />
        <Route path="/email/:id" element={<EmailView />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
