import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Divider from '@material-ui/core/Divider';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';

// import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
// import AccountBoxIcon from '@material-ui/icons/AccountBox';

import avatar from '../assets/avatar.png';
// import aboutUs from '../assets/aboutus.jpg';
// import teamMeet from '../assets/TeamMeet1.svg';
// import teamProject from '../assets/teamProject.svg';
// import teamRemote from '../assets/teamRemote.svg';
import teamSpirit from '../assets/teamSpirit.svg';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    marginTop: 0,
  },
  imgHeaderContainer: {
    paddingTop: "0em",
  },
  imgHeader: {
    height: "500px",
    width: "100%",
    padding: "2em",
    [theme.breakpoints.down("md")]: {
      height: "300px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "300px",
      padding: "1em",
    },
  },
  aboutContainer: {
    padding: "3em 10em",
    backgroundColor: theme.palette.common.greyLight,
    [theme.breakpoints.down("md")]: {
      padding: "3em 3em",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "3em 1.5em",
    }
  },
  teamContainer: {
    padding: "3em 10em",
    [theme.breakpoints.down("md")]: {
      padding: "3em 3em",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "3em 1.5em",
    }
  },
  rootTeam: {
    display: 'flex',
  },
  detailsTeam: {
    display: 'flex',
    flexDirection: 'column',
  },
  contentTeam: {
    flex: '1 0 auto',
  },
  coverTeam: {
    width: 100,
  },
  teamDesc: {
    paddingBottom: "20px"
  },
  teamCardRoot: {
    width: "188px",
    margin: "0px 100px",
    padding: "1em 0.5em",
    paddingBottom: "0em",
    borderColor: theme.palette.grey['200'],
    [theme.breakpoints.down("sm")]: {
      margin: "0px 30px",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "10px 10px",
    },
    "&:hover": {
      boxShadow: "0 14px 28px rgba(150, 150, 150, 0.25)"
    },
  },
  avatarMedia: {
    height: 150,
    width: 150,
    borderRadius: 20,
    margin: "0px auto"
  },
}));

export default function AboutUsPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));


  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid container direction="row" justify="center" alignItems="center" className={classes.imgHeaderContainer}> {/*------------Img Header Block----------------*/}
        <img alt="village" src={teamSpirit} className={classes.imgHeader}/>
      </Grid>
      <Divider light />
      <Grid item className={classes.aboutContainer}> {/*----------About Block-----------*/}
        <Grid container justify="flex-start" alignItems="flex-start">
          <Grid md item>
            <Typography variant="h2"><span style={{color: theme.palette.common.color1}}>About Us</span></Typography>
            <br/>
            <Typography variant="body1">
              Decentralised Governance Information Network (DGIN) is a knowledge platform for the Gram Panchayats of Gujarat.
              This is a partnership initiative by “Partner 1”, Partner 2” and UNICEF Gujarat office.
            </Typography>
            <br/>
            <Typography variant="body1">
              The purpose of this portal is to make useful resources accessible to the Gram Panchayat Sarpanches, Elected Representatives, Members of Various GP Committees and the Citizens.
              The resources include Guidelines for Gram Panchayat Development Plan (GPDP), various GP level committees,
              their roles, circulars of Government of Gujarat related to Panchayats, and so on.
            </Typography>
            <br/>
            <Typography variant="body1">
              We hope that you will like this initiative and benefit from the knowledge resources available here.
              Please feel free to ask questions by clicking the Questions-Answers tab. We shall try to answer the questions.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Divider light />
      <Grid item className={classes.teamContainer}> {/*----------Team Block-----------*/}
        <Grid container justify="flex-start" alignItems="flex-start" direction="column">
          <Grid md item className={classes.teamDesc}>
            <Typography variant="h2"><span style={{color: theme.palette.common.color1}}>Meet Our Team</span></Typography>
            <br/>
            <Typography variant="body1">
              A sentence or 2 about the team members.
            </Typography>
          </Grid>
          <Grid md container item direction="row" justify="center">
            <Card className={classes.teamCardRoot}>
              <CardMedia
                className={classes.avatarMedia}
                image={avatar}
                title="avatar"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Member 1
                </Typography>
                { matchesXS ? '' :
                  <Typography variant="body2" color="textSecondary" component="p">
                    Position | Description
                  </Typography>
                }
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  LinkedIn (Optional)
                </Button>
              </CardActions>
            </Card>
            <Card className={classes.teamCardRoot}>
              <CardMedia
                className={classes.avatarMedia}
                image={avatar}
                title="avatar"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Member 2
                </Typography>
                { matchesXS ? '' :
                  <Typography variant="body2" color="textSecondary" component="p">
                    Position | Description
                  </Typography>
                }
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  LinkedIn (Optional)
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
