// src/components/Navigation.js
import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { AuthContext } from '../components/AuthContext';

const Navigation = () => {
  const { logout } = useContext(AuthContext);

  return (
    <AppBar position="static" color="primary" elevation={2}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MailMigo
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Inbox
        </Button>
        <Button color="inherit" component={Link} to="/compose">
          Compose
        </Button>
        <Button color="inherit" onClick={logout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
