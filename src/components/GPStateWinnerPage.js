import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Divider from '@material-ui/core/Divider';
import { Link } from "react-router-dom";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';

import StateGPData from './ui/TopStateGPData';

// import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
// import AccountBoxIcon from '@material-ui/icons/AccountBox';

// import avatar from '../assets/imagePlaceHolder.png';
// import aboutUs from '../assets/aboutus.jpg';
// import teamMeet from '../assets/TeamMeet1.svg';
// import teamProject from '../assets/teamProject.svg';
// import teamRemote from '../assets/teamRemote.svg';
import winner from '../assets/winner2.svg';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    marginTop: 0,
  },
  imgHeaderContainer: {
    paddingTop: "0em",
  },
  imgHeader: {
    height: "200px",
    width: "100%",
    padding: "2em",
    [theme.breakpoints.down("md")]: {
      height: "200px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "150px",
    },
  },
  gpContainer: {
    padding: "3em 10em",
    backgroundColor: theme.palette.common.greyLight,
    [theme.breakpoints.down("md")]: {
      padding: "3em 3em",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "3em 1.5em",
    }
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 140,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  cardRoot: {
    maxWidth: 345,
    minWidth: 345,
    margin: theme.spacing(2),
    "&:hover": {
      boxShadow: "0 14px 28px rgba(150, 150, 150, 0.25)"
    },
  },
  cardMedia: {
    height: 140,
  },
}));

export default function GPStateWinnerPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const [year, setYear] = React.useState('');

  const handleChange = (event) => {
    setYear(event.target.value);
  };

  const gpArray = StateGPData();

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid container direction="row" justify="center" alignItems="center" className={classes.imgHeaderContainer}> {/*------------Img Header Block----------------*/}
        <img alt="village" src={winner} className={classes.imgHeader}/>
        <Typography align="center" variant="h2"><span style={{color: theme.palette.common.color1}}>State Awards Winner Gram Panchayats</span></Typography>
      </Grid>
      <Divider light />
      <Grid item className={classes.gpContainer}> {/*----------Select Year Block-----------*/}
        <Grid container justify="flex-start" alignItems="center">
          <Grid item>
            <Typography variant="h4"><span style={{color: theme.palette.common.color1}}>Awards given to Gram Panchayats of Gujarat in the year:</span></Typography>
          </Grid>
          <Grid item>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">Year</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={year}
                onChange={handleChange}
                label="Year"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={20}>2020-21</MenuItem>
                <MenuItem value={19}>2019-20</MenuItem>
                <MenuItem value={18}>2018-19</MenuItem>
                <MenuItem value={17}>2017-18</MenuItem>
                <MenuItem value={16}>2016-17</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center" className={classes.gpContainer}>
        {gpArray.filter(array => array.year === year).map((array, i) => (
          array.data.map((gpData, i) => (
            <Grid md={5} xl={4} item key={`${gpData}${i}`}>
              <Card className={classes.cardRoot}>
                <CardActionArea component={Link} to={{pathname: gpData.link, state:gpData}}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={gpData.avatar}
                    title="GP Image"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {gpData.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {gpData.desc}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" component={Link} to={{pathname: gpData.link, state:gpData}}>
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            ))
          ))}
      </Grid>
    </Grid>
  );
}
