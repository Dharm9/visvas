import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonArrow from '../components/ui/ButtonArrow';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Link } from "react-router-dom";


import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
// import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

import contactus from '../assets/contactus.jpg';
import contactusSM from '../assets/contactusSM2.jpg';


const useStyles = makeStyles(theme => ({
  mainContainer: {
    marginTop: 0,
  },
  contactContainer: {
    padding: "3em 10em",
    backgroundColor: theme.palette.common.greyLight,
    backgroundImage: `url(${contactus})`,
    backgroundPostion: "right",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "600px",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      padding: "3em 2em",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "3em 1.5em",
      backgroundImage: `url(${contactusSM})`,
    }
  },
  contactText: {
    fontSize: "1.25rem",
    fontFamily: "Roboto",
    fontWeight: 300,
    color: "#fff",
  },
}));

export default function ContactUsPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const setLinkPath = (e, tab1, tab2) => {
    props.setValue(tab1);
    props.setSelectedIndex(tab2);
  }

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item className={classes.contactContainer}> {/*----------Contact Us Block-----------*/}
        <Grid container justify="flex-start" alignItems="flex-start">
          <Grid md item>
            <Typography variant="h2"><span style={{color: theme.palette.common.color2}}>Contact Us</span></Typography>
            <br/><br/>
            <Grid container direction="row" className={classes.contactText}>
              <Grid item>
                <AccountBoxIcon style={{paddingRight: "10px"}}/>
              </Grid>
              <Grid item>
                Name
              </Grid>
            </Grid>
            <br/>
            <Grid container direction="row" className={classes.contactText}  wrap="nowrap">
              <Grid item>
                <LocationOnIcon style={{paddingRight: "10px"}}/>
              </Grid>
              <Grid item>
                123, ABC Society, near DEF Circle, City, State, India
              </Grid>
            </Grid>
            <br/>
            <Grid container direction="row" className={classes.contactText}>
              <Grid item>
                <EmailIcon style={{paddingRight: "10px"}}/>
              </Grid>
              <Grid item>
                sample@email.com
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
