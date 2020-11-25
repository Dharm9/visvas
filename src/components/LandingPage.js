import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonArrow from '../components/ui/ButtonArrow';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Divider from '@material-ui/core/Divider';
import { Link } from "react-router-dom";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

import FileCopyRoundedIcon from '@material-ui/icons/FileCopyRounded';
import ContactSupportRoundedIcon from '@material-ui/icons/ContactSupportRounded';
import FormatQuoteRoundedIcon from '@material-ui/icons/FormatQuoteRounded';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
// import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

import villageImg_md from '../assets/village2_md.jpg';
import villageImg_sm from '../assets/village2_sm.jpg';
// import doorImg from '../assets/door.png';
// import slantLine from '../assets/SlantLine.svg';
// import doorImg from '../assets/door.jpg';
import revolutionBackground from '../assets/repeatingBackground.svg';
import avatar from '../assets/avatar.png';
import contactus from '../assets/contactus.jpg';
import contactusSM from '../assets/contactusSM2.jpg';


const useStyles = makeStyles(theme => ({
  coverImage: {
    maxWidth: "50em",
    [theme.breakpoints.down("md")]: {
      maxWidth: "35em",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      width: "100%"
    }
  },
  heroTextContainer: {
    marginLeft: "10em",
    [theme.breakpoints.down("md")]: {
      margin: "3em 2em"
    },
    [theme.breakpoints.down("sm")]: {
      margin: "3em 1.5em"
    }
  },
  buttonContainer: {
    marginTop: "1em"
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em"
    }
  },
  mainContainer: {
    marginTop: 0,
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange
  },
  subtitle: {
    marginBottom: "1em"
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0
    }
  },
  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25
    }
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPostion: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%"
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "10em",
    [theme.breakpoints.down("sm")]: {
      padding: "8em 0",
      width: "100%",
      borderRadius: 0
    }
  },
  sectionContainer: {
    padding: "3em 0",
    [theme.breakpoints.down("md")]: {
      padding: "3em 2em",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "3em 1em",
    }
  },
  cardsContainer: {
    padding: "2em",
  },
  root: {
    padding: "1em 0.5em",
    width: "188px",
    marginRight: "50px",
    paddingBottom: 0,
    borderColor: theme.palette.grey['200'],
    [theme.breakpoints.down("sm")]: {
      margin: "10px 10px",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "5px 5px",
    },
    "&:hover": {
      boxShadow: "0 14px 28px rgba(150, 150, 150, 0.25)"
    },
  },
  media: {
    padding: "20px",
    fontSize: 50,
    borderRadius: 25,
    backgroundColor: theme.palette.common.color2,
    fill: theme.palette.common.color1,
    [theme.breakpoints.down("xs")]: {
      fontSize: 40
    }
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
    color: theme.palette.common.color1,
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
    }
  },
  aboutContainer: {
    padding: "3em 10em",
    backgroundColor: theme.palette.common.greyLight,
    [theme.breakpoints.down("md")]: {
      padding: "3em 2em",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "3em 1.5em",
    }
  },
  teamContainer: {
    padding: "3em 10em",
    [theme.breakpoints.down("md")]: {
      padding: "3em 2em",
    },
    [theme.breakpoints.down("sm")]: {
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

export default function LandingPage(props) {
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
      <Grid item> {/*----------Cover Block-----------*/}
        <Divider light />
        <Grid container justify="center" alignItems="center" direction={ matchesSM ? "column-reverse" : "row"}>
          <Grid md item className={classes.heroTextContainer}>
            <Typography variant="h2" align="left">
              Welcome to <br/> <span style={{color: theme.palette.common.color1}}>A Knowledge Portal</span>
            </Typography>
            <Typography variant="subtitle1" align="left">
              for Sarpanch | Gram Panchayat Elected Members | Other Committee Members and the Citizens
            </Typography>
            <Grid container justify="flex-start" className={classes.buttonContainer}>
              <Grid item>
                <Button variant="outlined" className={classes.learnButtonHero} component={Link} to="/resources" onClick={(e) => setLinkPath(e, 2, 3)}>
                  <span style={{marginRight: 10}}>Learn More</span>
                  <ButtonArrow width={15} height={15} fill={theme.palette.common.color1}/>
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid md item container justify={matchesSM ? "center" : "flex-end"}>
            <img alt="village" src={matchesSM ? villageImg_sm : villageImg_md} className={classes.coverImage}/>
          </Grid>
        </Grid>
      </Grid>
      <Divider light />
      <Grid item className={classes.sectionContainer}> {/*----------Services Block-----------*/}
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h4" align="center">
              Whether you are Sarpanch, Ward Member, any Gram Panchayat Committee Members or a Citizen, {matchesMD ? '': <br />}
              you will find a lot of useful information here.
            </Typography>
          </Grid>
          <Grid item className={classes.cardsContainer}>
            <Grid container direction="row" justify="center">
              <Grid item>{/*----------Services Card 1-----------*/}
                <Card className={classes.root} variant="outlined">
                  <Grid item container direction="column" alignItems="center">
                    <FileCopyRoundedIcon className={classes.media} style={{fill: theme.palette.common.resources, backgroundColor: theme.palette.common.resourcesLight}}/>
                    <CardContent>
                      <Typography align="center" className={classes.title} style={{color: theme.palette.common.resources}}>
                        Resources
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" component={Link} to="/resources" onClick={(e) => setLinkPath(e, 2, 3)} style={{color: "#999"}}>Learn More</Button>
                    </CardActions>
                  </Grid>
                </Card>
              </Grid>
              <Grid item>{/*----------Services Card 2-----------*/}
                <Card className={classes.root} variant="outlined">
                  <Grid item container direction="column" alignItems="center">
                    <FormatQuoteRoundedIcon className={classes.media} style={{fill: theme.palette.common.stories, backgroundColor: theme.palette.common.storiesLight}}/>
                    <CardContent>
                      <Typography align="center" className={classes.title} style={{color: theme.palette.common.stories}}>
                        Success Stories
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" component={Link} to="/GP-Success-Stories" onClick={(e) => setLinkPath(e, 1, 3)} style={{color: "#999"}}>Learn More</Button>
                    </CardActions>
                  </Grid>
                </Card>
              </Grid>
              <Grid item>{/*----------Services Card 3-----------*/}
                <Card className={classes.root} variant="outlined">
                  <Grid item container direction="column" alignItems="center">
                    <ContactSupportRoundedIcon className={classes.media} style={{fill: theme.palette.common.expert, backgroundColor: theme.palette.common.expertLight}}/>
                    <CardContent>
                      <Typography align="center" className={classes.title} style={{color: theme.palette.common.expert}}>
                        FAQs
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" component={Link} to="/faq" onClick={(e) => setLinkPath(e, 3, 0)} style={{color: "#999"}}>Learn More</Button>
                    </CardActions>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
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
      <Divider light />
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
