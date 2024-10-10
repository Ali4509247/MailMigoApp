// src/components/Inbox.js
import React, { useContext, useEffect } from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const Inbox = () => {
  const { userEmails, fetchUserEmails, user } = useContext(AuthContext);

  useEffect(() => {
    fetchUserEmails(user.email);
  }, []);

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Typography variant="h5" gutterBottom>
        Inbox
      </Typography>
      <Paper>
        <List>
          {userEmails.map((email) => (
            <ListItem
              button
              component={Link}
              to={`/email/${email.id}`}
              key={email.id}
              divider
            >
              <ListItemText
                primary={email.subject}
                secondary={email.content.substring(0, 50) + '...'}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default Inbox;
