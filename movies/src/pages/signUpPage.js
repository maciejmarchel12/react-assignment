import React, { useContext, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { Container, Typography, TextField, Button, Box, Snackbar } from "@mui/material";

const SignUpPage = () => {
    const context = useContext(AuthContext);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    const [registered, setRegistered] = useState(false);
    const [error, setError] = useState(null);

    const register = () => {
        let passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        const validPassword = passwordRegEx.test(password);

        if (!validPassword) {
            setError("Password must be at least 8 characters long and contain at least one letter, one digit, and one special character.");
            return;
        }

        if (password !== passwordAgain) {
            setError("Passwords do not match. Please enter the same password in both fields.");
            return;
        }

        context.register(userName, password);
        setRegistered(true);
    };

    const handleCloseError = () => {
        setError(null);
    };

    if (registered === true) {
        return <Navigate to="/login" />;
    }

    return (
        <Container component="main" maxWidth="xs" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8 }}>
            <Typography component="h2" variant="h5">
                SignUp page
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
                    value={userName}
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
                    autoComplete="new-password"
                    value={password}
                    onChange={e => {
                        setPassword(e.target.value);
                    }}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="passwordAgain"
                    label="Password Again"
                    type="password"
                    id="passwordAgain"
                    autoComplete="new-password"
                    value={passwordAgain}
                    onChange={e => {
                        setPasswordAgain(e.target.value);
                    }}
                />
                <Button
                    fullWidth
                    variant="contained"
                    onClick={register}
                >
                    Register
                </Button>
            </Box>
            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                Already have an account? <Link to="/login">Log In!</Link>
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

export default SignUpPage;
