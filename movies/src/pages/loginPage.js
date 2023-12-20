import React, { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { Link } from "react-router-dom";
import { Container, Typography, TextField, Button, Box, Snackbar } from "@mui/material";

const LoginPage = () => {
    const context = useContext(AuthContext);

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const login = async () => {
        try {
            await context.authenticate(userName, password);
        } catch (error) {
            setError("Invalid username or password. Please try again. Or if you do not have an account please sign up!");
        }
    };

    const handleCloseError = () => {
        setError(null);
    };

    let location = useLocation();
    const { from } = location.state ? { from: location.state.from.pathname } : { from: "/" };

    if (context.isAuthenticated === true) {
        return <Navigate to={from} />;
    }

    return (
        <Container component="main" maxWidth="xs" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8 }}>
            <Typography component="h2" variant="h5">
                Login page
            </Typography>
            <Box component="form" sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    onChange={e => {
                        setUserName(e.target.value);
                    }}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={e => {
                        setPassword(e.target.value);
                    }}
                />
                <Button
                    fullWidth
                    variant="contained"
                    onClick={login}
                >
                    Log in
                </Button>
            </Box>
            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                Not Registered? <Link to="/register">Sign Up!</Link>
            </Typography>
            <Snackbar
                open={!!error}
                autoHideDuration={6000}
                onClose={handleCloseError}
                message={error}
            />
        </Container>
    );
};

export default LoginPage;
