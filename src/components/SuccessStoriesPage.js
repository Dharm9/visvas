import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Link } from "react-router-dom";

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
// import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import stories from '../assets/gp stories.svg';



const useStyles = makeStyles(theme => ({
  mainContainer: {
    marginTop: 0,
    backgroundColor: theme.palette.common.greyLight,
  },
  gpContainer: {
    padding: "3em 10em",
    [theme.breakpoints.down("md")]: {
      padding: "3em 2em",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "3em 1.5em",
    }
  },
  buttonContainer: {
    margin: "30px",
  },
  buttonFormat: {
    padding: "1.5em",
    borderWidth: "2px",
    "&:hover": {
      borderWidth: "2px"
    }
  },
  storiesIcon: {
    height: "100%",
    width: "100%",
  },
}));

export default function SuccessStoriesPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const setLinkPath = (tab1, tab2) => {
    props.setValue(tab1);
    props.setSelectedIndex(tab2);
  }

  return (
    <Grid container direction="row" className={classes.mainContainer}>
      <Grid container direction="column" className={classes.gpContainer}> {/*----------About Block-----------*/}
        <Grid md item>
          <Typography variant="h2"><span style={{color: theme.palette.common.color1}}>Gram Panchayat Success Stories</span></Typography>
        </Grid>
        <Grid container direction="row" justify="space-evenly">
          <Grid md={6} item container direction="column" justify="center">
            <Grid md item className={classes.buttonContainer}>
              <Button
                variant="outlined"
                color="primary"
                endIcon={<ArrowForwardIosIcon/>}
                className={classes.buttonFormat}
                style={{minWidth: matchesSM ? 'inherit' : "450px"}}
                component={Link}
                to="/National-Award-Winner-GP"
                onClick={() => setLinkPath(1, 0)}>
                  National Award Winner Child Friendly GPs
              </Button>
            </Grid>
            <Grid md item className={classes.buttonContainer}>
              <Button
                variant="outlined"
                color="primary"
                endIcon={<ArrowForwardIosIcon/>}
                className={classes.buttonFormat}
                style={{minWidth: matchesSM ? 'inherit' : "450px"}}
                component={Link}
                to="/State-Award-Winner-GP"
                onClick={() => setLinkPath(1, 1)}>
                  State Award Winner GPs
              </Button>
            </Grid>
            <Grid md item className={classes.buttonContainer}>
              <Button
                variant="outlined"
                color="primary"
                endIcon={<ArrowForwardIosIcon/>}
                className={classes.buttonFormat}
                style={{minWidth: matchesSM ? 'inherit' : "450px"}}
                component={Link}
                to="/Child-Friendly-GP"
                onClick={() => setLinkPath(1, 2)}>
                  Child Friendly Good Practices by GPs
              </Button>
            </Grid>
          </Grid>
          <Grid md={4} item>
            {matchesSM? '' : <img alt="books" src={stories} className={classes.storiesIcon}/>}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
