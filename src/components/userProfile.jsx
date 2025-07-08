import React from 'react';
import { Avatar, Typography, Box, Container, Grid, Link, Paper } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ForkRightIcon from '@mui/icons-material/ForkRight';

const UserProfile = ({ user, repos }) => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 6 }}>

      {/* Profile Card */}

      <Paper
        elevation={2}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 3,
          borderRadius: 4,
          p: 3,
          backgroundColor: '#e3f2fd',
          border: '1px solid #90caf9',
        }}
      >
        <Avatar
          src={user.avatar_url}
          alt={user.login}
          sx={{
            width: 80,
            height: 80,
            border: '2px solid #64b5f6',
          }}
        />
        <Box>
          <Typography variant="h6" fontWeight={600} color="#0d47a1">
            {user.name || user.login}
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={0.5}>
            {user.bio || 'No bio available'}
          </Typography>
          <Typography variant="body2" color="text.secondary" mt={0.5}>
            {user.location || 'N/A'}
          </Typography>
          <Typography variant="body2" mt={0.5}>
            Followers: {user.followers} | Following: {user.following}
          </Typography>
        </Box>
      </Paper>

      {/* Repo Cards */}
      <Box mt={5}>
        <Typography variant="h6" fontWeight={600} mb={2} color="#0d47a1">
          Repositories
        </Typography>
        <Grid container spacing={2}>
          {repos.map((repo) => (
            <Grid item xs={12} sm={6} key={repo.id}>
              <Paper
                elevation={1}
                sx={{
                  p: 2,
                  borderRadius: 3,
                  backgroundColor: '#fff',
                  borderLeft: '4px solid #42a5f5',
                  transition: '0.3s ease',
                  '&:hover': {
                    backgroundColor: '#e3f2fd',
                  },
                }}
              >
                <Typography variant="subtitle1" fontWeight={600} color="#1565c0">
                  {repo.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={1}>
                  <StarIcon
                    fontSize="small"
                    sx={{ verticalAlign: 'middle', mr: 0.5, color: '#fbc02d' }}
                  />
                  {repo.stargazers_count}
                  &nbsp;&nbsp;
                  <ForkRightIcon fontSize="small"
                    sx={{ verticalAlign: 'middle', mr: 0.5, color: '#90caf9' }}
                  />
                  {repo.forks_count}
                </Typography>
                <Link
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                  sx={{ fontSize: '0.85rem', color: '#1565c0' }}
                >
                  View Repository →
                </Link>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default UserProfile;
