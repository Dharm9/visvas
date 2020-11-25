import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
// import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import faq from '../assets/faq.svg';



const useStyles = makeStyles(theme => ({
  mainContainer: {
    marginTop: 0,
    backgroundColor: theme.palette.common.greyLight,
  },
  faqContainer: {
    padding: "3em 10em",
    [theme.breakpoints.down("md")]: {
      padding: "3em 2em",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "3em 1.5em",
    }
  },
  faqIcon: {
    height: "100%",
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
}));

export default function FAQPage(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqs = [
    {
      question: "Question 1",
      answer: "The answer will go here.",
      panel: "panel1",
      ariaControl: "panel1-content",
      id: "panel1-header",
    },
    {
      question: "Question 2",
      answer: "The answer will go here.",
      panel: "panel2",
      ariaControl: "panel2-content",
      id: "panel2-header",
    },
    {
      question: "Question 3",
      answer: "The answer will go here.",
      panel: "panel3",
      ariaControl: "panel3-content",
      id: "panel3-header",
    },
    {
      question: "Question 4",
      answer: "The answer will go here.",
      panel: "panel4",
      ariaControl: "panel4-content",
      id: "panel4-header",
    },
  ];

  return (
    <Grid container direction="row" className={classes.mainContainer}>
      <Grid container direction="column" className={classes.faqContainer}> {/*----------About Block-----------*/}
        <Grid md item>
          <Typography variant="h2"><span style={{color: theme.palette.common.color1}}>Frequently Asked Questions</span></Typography>
        </Grid>
        <Grid container direction="row" justify="space-evenly">
          <Grid md={7} item container direction="column" justify="center">
            {faqs.map((faq, i) => (
              <Accordion key={`${faq}${i}`} expanded={expanded === faq.panel} onChange={handleChange(faq.panel)}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={faq.ariaControl}
                  id={faq.id}
                >
                  <Typography className={classes.heading}>{faq.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
              ))}
          </Grid>
          <Grid md={4} item>
            {matchesSM? '' : <img alt="books" src={faq} className={classes.faqIcon}/>}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
