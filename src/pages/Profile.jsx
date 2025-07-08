import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import UserProfile from '../components/UserProfile';
import { Typography, Container, CircularProgress, Box } from '@mui/material';

const Profile = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setError('');
        const userRes = await axios.get(`https://api.github.com/users/${username}`);
        const repoRes = await axios.get(
          `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`
        );

        setUser(userRes.data);
        setRepos(repoRes.data);
      } catch (err) {
        setError('User not found or api limit exceeded');
      }
    };

    fetchGitHubData();
  }, [username]);

  if (error)
    return (
      <Container>
        <Typography color="error" textAlign="center" mt={4}>
          {error}
        </Typography>
      </Container>
    );

  if (!user)
    return (
      <Box textAlign="center" mt={6}>
        <CircularProgress />
      </Box>
    );

  return <UserProfile user={user} repos={repos} />;
};

export default Profile;
