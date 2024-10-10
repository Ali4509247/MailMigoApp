import React, { useState, useContext } from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Tabs,
  Tab,
} from '@mui/material';
import { AuthContext } from '../components/AuthContext';


const AuthPage = () => {
  const [activeTab, setActiveTab] = useState(0); // tracks which tab is active
  const [formData, setFormData] = useState({ name: '', email: '', password: '' }); // formData is an object that tracks the data that a user inputs
  const { login, signup } = useContext(AuthContext); //fetches the login and signup methods from the AuthContext. This allows the component to call these functions when the user submits the form

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeTab === 0) {
      login(formData.email, formData.password);
    } else {
      signup(formData.name, formData.email, formData.password);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Paper elevation={3} sx={{ padding: 4, width: '100%' }}>
          <Typography variant="h4" align="center" gutterBottom>
            MailMigo
          </Typography>
          <Tabs
            value={activeTab}
            onChange={(e, value) => setActiveTab(value)}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            sx={{ marginBottom: 3 }}
          >
            <Tab label="Login" />
            <Tab label="Signup" />
          </Tabs>
          <form onSubmit={handleSubmit}>
          {activeTab === 1 && (
              <TextField
                label="Name"
                name="name"
                fullWidth
                required
                margin="normal"
                value={formData.name}
                onChange={handleChange}
              />
            )}
            <TextField
              label="Email"
              name="email"
              type="email"
              fullWidth
              required
              margin="normal"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              fullWidth
              required
              margin="normal"
              value={formData.password}
              onChange={handleChange}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ marginTop: 2 }}
            >
              {activeTab === 0 ? 'Login' : 'Signup'}
            </Button>
          </form>
        </Paper>
      </Box>
    </Container>
  );
};

export default AuthPage;

//STATUS: UNDERSTOOD
