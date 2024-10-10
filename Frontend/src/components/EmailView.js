import React, { useContext, useState, useEffect } from 'react';
import { Typography, Container, Paper, Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const EmailView = () => {
  const { id } = useParams();
  const [em, setEm] = useState(null);
  const navigate = useNavigate();
  const { userEmails } = useContext(AuthContext);

  useEffect(() => {

    userEmails.forEach((email) => {
      if (String(email.id) === String(id)) {
        setEm({
          subject: email.subject,
          senderName: email.senderName,
          senderEmail: email.senderEmail,
          content: email.content,
        });
      }
    });
  }, [id, userEmails]);

  if (!em) {
    return <div>Loading...</div>; 
  }

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Button
        variant="outlined"
        onClick={() => navigate(-1)}
        sx={{ marginBottom: 2 }}
      >
        Back to Inbox
      </Button>

      <Paper sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          {em.subject}
        </Typography>

        <Typography variant="subtitle1" gutterBottom>
          From: {em.senderName} ({em.senderEmail})
        </Typography>

        <Typography variant="body1" color="textSecondary">
          {em.content}
        </Typography>
      </Paper>
    </Container>
  );
};

export default EmailView;
