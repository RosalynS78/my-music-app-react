import React, { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  IconButton,
  Typography,
  Toolbar,
  Box,
  AppBar,
  Button,
} from "@mui/material";
import DashBoard from "./components/DashBoard";
import LogIn from "./components/LogIn";

import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      light: "#5997b2",
      main: "#9bc0ff",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#007887",
      main: "#00acc1",
      dark: "#33bccd",
      contrastText: "#fff",
    },
  },
});

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLoggedIn = (e) => {
    // without preventDefault - was fetching constantly
    e.preventDefault();
    // first you have condition. if that condition is true, first argument runs, if false, second argument runs
    loggedIn ? setLoggedIn(false) : setLoggedIn(true);
    // console.log(loggedIn)
  };

  const handleLogOut = (e) => {
    setLoggedIn(false);
  };
  // no longer need render becuase it's going to be a functional component so its returning LogIn component

  return (
    <React.Fragment>
      <div className="container">
        <Box sx={{ flexGrow: 1 }}>
          <ThemeProvider theme={theme}>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                ></IconButton>
                <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
                  My Music App
                </Typography>
                <div>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={(e) => handleLogOut(e)}
                    type="submit"
                  >
                    Sign Out
                  </Button>
                </div>
              </Toolbar>
            </AppBar>
          </ThemeProvider>
        </Box>
        {loggedIn ? <DashBoard /> : <LogIn handleLoggedIn={handleLoggedIn} />}
      </div>
    </React.Fragment>
  );
};

export default App;
