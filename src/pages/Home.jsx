import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box, Paper } from '@mui/material';

const Home = () => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (username.trim()) {
            navigate(`/user/${username}`);
        }
    };

    return (
        <Container maxWidth="sm">
            <Paper
                elevation={3}
                sx={{
                    p: 4,
                    mt: 10,
                    backgroundColor: '#e3f2fd',
                    borderRadius: 4,
                    border: '1px solid rgb(33, 73, 106)',
                }}
            >
                <Box textAlign="center">
                    <Typography
                        variant="h4"
                        gutterBottom
                        fontWeight={700}
                        color="#000000"
                    >
                        GitHub Profile Viewer
                    </Typography>

                    <TextField
                        placeholder="Enter GitHub Username"
                        variant="outlined"
                        fullWidth
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        InputLabelProps={{ shrink: true }}
                        sx={{
                            mb: 2,
                            backgroundColor: '#fff',
                            borderRadius: 1,
                            input: {
                                padding: '12px 14px',
                            },
                        }}
                    />

                    <Button
                        variant="contained"
                        onClick={handleSearch}
                        fullWidth
                        sx={{
                            backgroundColor: '#42a5f5',
                            '&:hover': { backgroundColor: '#1e88e5' },
                            color: '#fff',
                            py: 1.2,
                            fontWeight: 500,
                            fontSize: '0.95rem',
                            borderRadius: 2,
                        }}
                    >
                        Search
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
};

export default Home;
