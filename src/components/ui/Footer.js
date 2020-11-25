import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// import footerAdornment from '../../assets/Footer Adornment.svg';
import footerAdornment from '../../assets/FooterTitle2.svg';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.color2,
    width: "100%",
    position: "relative"
  },
  adornment: {
    width: "21em",
    [theme.breakpoints.down("md")]: {
      width: "19em"
    },
    [theme.breakpoints.down("xs")]: {
      width: "16em"
    }
  },
  mainContainer: {

  },
  partnerTitle: {
    color: theme.palette.common.color1,
    fontFamily: "Lobster Two",
    fontWeight: 700,
    fontSize: "2rem",
    textDecoration: "none",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    }
  },
  partners: {
    color: theme.palette.common.color1,
    fontFamily: "Lobster Two",
    fontWeight: 400,
    fontSize: "1.25rem",
    textDecoration: "none",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    }
  },
  gridItem: {
    margin: "1em",
    [theme.breakpoints.down("xs")]: {
      margin: 0
    }
  }
}));

export default function Footer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));

  const partners = (
    <React.Fragment>
      <Grid container item style={{paddingRight: "25px"}} alignItems="flex-end" direction="column">
        <Grid item className={classes.gridItem}>
          <Grid container>
            <Grid item className={classes.partnerTitle}>Partners</Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container spacing={3}>
            <Grid item className={classes.partners}>Partner 1</Grid>
            <Grid item className={classes.partners}>Partner 2</Grid>
            <Grid item className={classes.partners}>Partner 3</Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
    );

    const partnersXS = (
      <React.Fragment>
        <Grid container item alignItems="center" direction="column">
          <Grid item className={classes.gridItem}>
            <Grid container spacing={1} alignItems="center" direction="column">
              <Grid item className={classes.partnerTitle}>Partners</Grid>
              <Grid item className={classes.partners}>Partner 1</Grid>
              <Grid item className={classes.partners}>Partner 2</Grid>
              <Grid item className={classes.partners}>Partner 3</Grid>
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
      );

  return (
    <footer className={classes.footer}>
      <Grid container className={classes.mainContainer} justify="space-between" alignItems="center" direction="row" wrap="nowrap">
        <Grid item>
          <img alt="black decorative slash" src={footerAdornment} className={classes.adornment}/>
        </Grid>
        { matches ? partnersXS : partners}
      </Grid>
    </footer>
  );
}
