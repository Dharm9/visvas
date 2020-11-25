import { createMuiTheme } from "@material-ui/core/styles";

const panchPrimary = "#01579b";
const panchSecondaryLight = "#fbfdff";
const panchSecondary = "#e3f2fd";
const panchSecondaryDark = "#b3dcfa";
const panchGrey = "#868686";
const panchGrey2 = "#f7f9fa";

const resources = "#9c27b0";
const resourcesLight = "#f3e5f5";
const stories = "#e91e63";
const storiesLight = "#fce4ec";
const expert = "#3f51b5";
const expertLight = "#e8eaf6";

export default createMuiTheme({
  palette: {
    common: {
      color1: panchPrimary,
      color2: panchSecondary,
      color2Light: panchSecondaryLight,
      color2Dark: panchSecondaryDark,
      greyLight: panchGrey2,
      resources: resources,
      resourcesLight: resourcesLight,
      stories: stories,
      storiesLight: storiesLight,
      expert: expert,
      expertLight: expertLight,
    },
    primary: {
      main: panchPrimary,
    },
    secondary: {
      main: panchSecondary,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "None",
      fontWeight: 700,
      fontSize: "1rem",
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
    },
    h2: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2rem",
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2rem",
      color: panchPrimary,
      lineHeight: 1.5,
      '@media (max-width:1280px)': {
        fontSize: '1.5rem',
      },
      '@media (max-width:960px)': {
        fontSize: '1.8rem',
      },
      '@media (max-width:690px)': {
        fontSize: '1.5rem',
      },
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
      '@media (max-width:400px)': {
        fontSize: '1.5rem',
      },
    },
    h4: {
      fontFamily: "Raleway",
      fontWeight: 400,
      fontSize: "1.75rem",
      color: panchPrimary,
      '@media (max-width:1280px)': {
        fontSize: '1.5rem',
      },
      '@media (max-width:600px)': {
        fontSize: '1.25rem',
      },
    },
    body1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: "#546e7a",
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: panchGrey,
    },
    learnButton: {
      borderColor: panchPrimary,
      borderWidth: 2,
      textTransform: "none",
      color: panchPrimary,
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold",
    }
  },
});
