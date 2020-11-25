import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import warningIcon from '../../assets/under construction.svg';


const useStyles = makeStyles(theme => ({
  container: {
    margin: "6em 0",
    [theme.breakpoints.down("sm")]: {
      margin: "5em 0"
    }
  },
  imgSize: {
    width: "40em",
    [theme.breakpoints.down("md")]: {
      width: "30em"
    },
    [theme.breakpoints.down("sm")]: {
      width: "20em"
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em"
    }
  },
  underConstruction: {
    fontFamily: "Major Mono Display",
    fontSize: "4rem",
    paddingBottom: "1em",
    color: theme.palette.common.color1,
    lineHeight: 1.5,
    [theme.breakpoints.down("md")]: {
      fontSize: "3rem"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem"
    }
  }
}));

export default function PageNotFound(props) {
  const classes = useStyles();

  return (
      <Grid container direction="column" justify="center" alignItems="center" className={classes.container}>
        <Grid item>
          <Typography align="center" className={classes.underConstruction}>Under Construction</Typography>
        </Grid>
        <Grid item>
          <img alt="Page Not Found" src={warningIcon} className={classes.imgSize}/>
        </Grid>
      </Grid>
    );
}
