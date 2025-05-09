import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container, Typography, Paper, Box } from '@mui/material';

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome to your Dashboard
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Role: {user?.role}
          </Typography>
          <Box sx={{ mt: 4 }}>
            {user?.role === 'teacher' ? (
              <Typography>
                As a teacher, you can create and manage your courses here.
              </Typography>
            ) : (
              <Typography>
                As a student, you can view and enroll in courses here.
              </Typography>
            )}
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Dashboard;