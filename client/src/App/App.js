import React from 'react';
import {Typography, AppBar} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles"
import './App.css';

import Notifications from "../components/Notifications";
import Videoplayer from "../components/Videoplayer";
import Options from "../components/Options";

const useStyles = makeStyles(theme => ({
  mainHeading: {
    paddingTop: "16px",
    paddingBottom: "16px"
  },
  appBar: {
    borderRadius: 15,
    margin: "30px 100px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "600px",
    border: "2px solid black",
    
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  image: {
    marginLeft: "15px",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.mainHeading} variant="h3" fontWeight={900} align="center">
          Simple Zoom Clone
        </Typography>
      </AppBar>
      <Videoplayer />
      <Options>
        <Notifications />
      </Options>
    </div>
  );
}

export default App;
