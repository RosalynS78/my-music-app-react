import React from 'react';
// another way to import
import { Container, Box, Button, TextField, CssBaseline } from '@mui/material';

const Login = (props) => {
    const { handleLoggedIn } = props;
    return (
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="sm">
            <Box className="loginBox" sx={{ bgcolor: 'lightgray', height: '100vh' }}>
            <form onSubmit={(e) => handleLoggedIn(e)}>
            <div className="loginItems">
            <TextField 
            variant="standard" 
            autoFocus
            autoComplete="email"
            name="email"
            placeholder="email"
            type="text"
            required
            label="Required"
            />
            </div>
            <div className="loginItems">
            <TextField
            variant="standard" 
            autoFocus
            autoComplete="password"
            name="password"
            type="password"
            placeholder="password"
            required
            />
            </div>
            <div className="logInButton">
            <Button type="submit" variant="text"> SIGN IN </Button>
            </div>
            </form>
            </Box>       
          </Container>
         
        </React.Fragment>
    );
}

export default Login;
