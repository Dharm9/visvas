import React, { useState, useEffect, useRef } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Popover from '@material-ui/core/Popover';
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import Alert from '@material-ui/lab/Alert';

// import logo from "../../assets/GPG.svg";
import logo from "../../assets/HeaderTitle2.svg";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "1.25em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "1em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
  logo: {
    height: "6em",
    color: theme.palette.common.color1,
    [theme.breakpoints.down("md")]: {
      height: "5.5em"
    },
    [theme.breakpoints.down("xs")]: {
      height: "4.8em"
    },
  },
  logoContainer: {
    padding: 0,
    paddingRight: "5px",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginRight: "25px",
    [theme.breakpoints.down("lg")]: {
      marginRight: "7px"
    },
    color: theme.palette.common.color1
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  menu: {
    backgroundColor: theme.palette.common.color2,
  },
  menuItem: {
    ...theme.typography.tab,
    fontSize: "0.95rem",
    color: theme.palette.common.color1,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
    color: theme.palette.common.color1
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawer: {
    backgroundColor: theme.palette.common.color2,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: theme.palette.common.color1,
    opacity: 0.7,
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
    },
  },
  appbar: {
    border: "2px blue",
    zIndex: theme.zIndex.modal + 1,
  },
  popover: {
    pointerEvents: 'none'
  },
  popoverContent: {
    pointerEvents: 'auto',
    backgroundColor: theme.palette.common.color2Light
  },
  nested: {
    ...theme.typography.tab,
    paddingLeft: theme.spacing(4),
  },
  drawerSubMenu: {
    backgroundColor: theme.palette.common.color2Light
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const popoverAnchorRes = useRef(null);
  const popoverAnchorStory = useRef(null);

  const [openDrawer, setOpenDrawer] = useState(false);
  const [openMenuRes, setOpenMenuRes] = useState(false);
  const [openMenuStory, setOpenMenuStory] = useState(false);

  const [drawerCollapseIndex, setDrawerCollapseIndex] = useState("");

  const hasSubMenu = (e, hasSub, activeIndex, drawerIndex) => {
    if (drawerCollapseIndex === drawerIndex) {
      setDrawerCollapseIndex("");
    } else {
      setDrawerCollapseIndex(drawerIndex);
    }
    if (!hasSub) {
      setOpenDrawer(false);
      props.setValue(activeIndex);
    }
  }

  const handleSubDrawerClick = (activeIndex, activeSelectedIndex) => {
    setDrawerCollapseIndex("");
    setOpenDrawer(false);
    props.setValue(activeIndex);
    props.setSelectedIndex(activeSelectedIndex);
  }

  const handleChange = (e, newValue) => {
    props.setValue(newValue);
    props.setSelectedIndex(3);
  };
  // Resources Menu
  const handleResClick = (e) => {
    setOpenMenuRes(true);
  };

  const handleResMenuItemClick = (e, i) => {
    setOpenMenuRes(false);
    props.setSelectedIndex(i);
  };

  const handleResClose = (e) => {
    setOpenMenuRes(false);
  };
  // Story Menu
  const handleStoryClick = (e) => {
    setOpenMenuStory(true);
  };

  const handleStoryMenuItemClick = (e, i) => {
    setOpenMenuStory(false);
    props.setSelectedIndex(i);
  };

  const handleStoryClose = (e) => {
    setOpenMenuStory(false);
  };


  const menuOptionsRes = [
    {
      name: "Circulars",
      link: "/gp-circulars",
      activeIndex: 2,
      selectedIndex: 0,
    },
    {
      name: "Guidlines",
      link: "/gp-guidlines",
      activeIndex: 2,
      selectedIndex: 1,
    },
    {
      name: "Tools",
      link: "/gp-tools",
      activeIndex: 2,
      selectedIndex: 2,
    }
  ];

  const menuOptionsStory = [
    {
      name: "National Award Winner Child Friendly GPs",
      link: "/National-Award-Winner-GP",
      activeIndex: 1,
      selectedIndex: 0,
    },
    {
      name: "State Award Winner GPs",
      link: "/State-Award-Winner-GP",
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: "Child Friendly Good Practices by GPs",
      link: "/Child-Friendly-GP",
      activeIndex: 1,
      selectedIndex: 2,
    },
  ];

  const routes = [
    { name: "Home", link: "/", activeIndex: 0, hasMenu: 0 },
    {
      name: "GP Success Stories",
      link: matches ? "#" : "/GP-Success-Stories",
      activeIndex: 1,
      selectedIndex: 3,
      ref: popoverAnchorStory,
      ariaOwns: popoverAnchorStory ? "simple-menu-story" : undefined,
      ariaPopup: popoverAnchorStory ? "true" : undefined,
      mouseOver: (event) => handleStoryClick(event),
      mouseEnter: (event) => handleStoryClick(event),
      mouseLeave: (event) => handleStoryClose(event),
      hasMenu: 1,
      subMenu: menuOptionsStory
    },
    {
      name: "Resources",
      link: matches ? "#" : "/resources",
      activeIndex: 2,
      selectedIndex: 3,
      ref: popoverAnchorRes,
      ariaOwns: popoverAnchorRes ? "simple-menu-resources" : undefined,
      ariaPopup: popoverAnchorRes ? "true" : undefined,
      mouseOver: (event) => handleResClick(event),
      mouseEnter: (event) => handleResClick(event),
      mouseLeave: (event) => handleResClose(event),
      hasMenu: 1,
      subMenu: menuOptionsRes
    },
    { name: "FAQ", link: "/faq", activeIndex: 3, hasMenu: 0 },
    { name: "About Us", link: "/about", activeIndex: 4, hasMenu: 0 },
    { name: "Contact Us", link: "/contact", activeIndex: 5, hasMenu: 0 },
  ];

  useEffect(() => {
    [...menuOptionsRes, ...menuOptionsStory, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (props.value !== route.activeIndex) {
            props.setValue(route.activeIndex);
            if (
              route.selectedIndex &&
              route.selectedIndex !== props.selectedIndex
            ) {
              props.setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    });
  }, [props.value, menuOptionsRes, menuOptionsStory, props.selectedIndex, routes, props]);

  const tabs = (
    <React.Fragment>
      <Tabs
        value={props.value}
        className={classes.tabContainer}
        onChange={handleChange}
        indicatorColor="primary"
      >
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            ref={route.ref}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseEnter={route.mouseEnter}
            onMouseLeave={route.mouseLeave}
          />
        ))}
      </Tabs>
      <Popover
        id="simple-menu-resources"
        className={classes.popover}
        classes={{ paper: classes.popoverContent }}
        anchorEl={popoverAnchorRes.current}
        elevation={1}
        open={openMenuRes}
        style={{ zIndex: theme.zIndex.modal + 1 }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        PaperProps={{onMouseEnter: handleResClick, onMouseLeave: handleResClose}}
      >
        {menuOptionsRes.map((option, i) => (
          <MenuItem
            key={`${option}${i}`}
            component={Link}
            divider
            to={option.link}
            classes={{ root: classes.menuItem }}
            onClick={(event) => {
              handleResMenuItemClick(event, i);
              props.setValue(1);
              handleResClose();
            }}
            selected={i === props.selectedIndex && props.value === 2}
          >
            {option.name}
          </MenuItem>
        ))}
      </Popover>
      <Popover
        id="simple-menu-story"
        className={classes.popover}
        classes={{ paper: classes.popoverContent }}
        anchorEl={popoverAnchorStory.current}
        elevation={1}
        open={openMenuStory}
        style={{ zIndex: theme.zIndex.modal + 1 }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        PaperProps={{onMouseEnter: handleStoryClick, onMouseLeave: handleStoryClose}}
      >
        {menuOptionsStory.map((option, i) => (
          <MenuItem
            key={`${option}${i}`}
            component={Link}
            divider
            to={option.link}
            classes={{ root: classes.menuItem }}
            onClick={(event) => {
              handleStoryMenuItemClick(event, i);
              props.setValue(2);
              handleStoryClose();
            }}
            selected={i === props.selectedIndex && props.value === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Popover>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        anchor="top"
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route, index) => (
            <React.Fragment>
              <ListItem
                key={`${route}${index}`}
                onClick={(event) => {
                  hasSubMenu(event, route.hasMenu, route.activeIndex, index);
                }}
                divider
                button
                component={Link}
                to={route.link}
                selected={props.value === route.activeIndex}
                classes={{ selected: classes.drawerItemSelected }}
              >
                <ListItemText className={classes.drawerItem} disableTypography>
                  {route.name}
                </ListItemText>
                { route.hasMenu ? index === drawerCollapseIndex ? <ExpandLess style={{color: theme.palette.common.color1}}/> : <ExpandMore style={{color: theme.palette.common.color1}}/> : undefined}
              </ListItem>
              { route.hasMenu ?
                <Collapse in={index === drawerCollapseIndex} timeout="auto" unmountOnExit>
                  <List component="div" classes={{ root: classes.drawerSubMenu}} disablePadding>
                    {route.subMenu.map((menu) => (
                      <ListItem
                        key={`${route}${route.activeIndex}${menu}${menu.selectedIndex}`}
                        onClick={(event) => (
                            handleSubDrawerClick(route.activeIndex, menu.selectedIndex)
                          )}
                        button
                        component={Link}
                        to={menu.link}
                        selected={props.value === menu.activeIndex && props.selectedIndex === menu.selectedIndex}
                        className={classes.nested}
                        classes={{ selected: classes.drawerItemSelected }}>
                        <ListItemText className={classes.drawerItem} disableTypography >
                          {menu.name}
                        </ListItemText>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
                :
                undefined
              }
            </React.Fragment>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );


  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="secondary" className={classes.appbar}>
          <Toolbar disableGutters>
            <Button
              className={classes.logoContainer}
              component={Link}
              to="/"
              onClick={() => props.setValue(0)}
              disableRipple
            >
              <img src={logo} className={classes.logo} alt="company logo" />
            </Button>
            <Alert severity="warning">
              This is a Demo Only
            </Alert>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
