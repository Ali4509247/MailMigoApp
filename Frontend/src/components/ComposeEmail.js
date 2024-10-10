import React, { useState, useContext} from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Box,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/AuthContext';
import axios from 'axios';



const ComposeEmail = () => {

  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleSend = async (e) => {
    e.preventDefault();
    let recipientId = null
    try {
      const response = await axios.get(`http://localhost:8080/api/getUser/${to}`);
      recipientId = response.data.id;
    } catch (error) {
      console.error('Error sending email:', error);
    }

    const emailData = {
      senderName: user.name,
      senderEmail: user.email,
      recipientId,
      subject,
      content: description
    };

    try {
      await axios.post('http://localhost:8080/api/email', emailData);
      navigate('/');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Paper sx={{ padding: 4 }}>
        <Typography variant="h5" gutterBottom>
          Compose Email
        </Typography>
        <Box component="form" onSubmit={handleSend}>
          <TextField
            label="To"
            type="email"
            fullWidth
            required
            margin="normal"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
          <TextField
            label="Subject"
            fullWidth
            required
            margin="normal"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <TextField
            label="Message"
            fullWidth
            required
            margin="normal"
            multiline
            rows={6}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ marginTop: 2 }}
            onClick={handleSend}
          >
            Send
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default ComposeEmail;