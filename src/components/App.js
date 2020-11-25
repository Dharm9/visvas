import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import theme from './ui/Theme';
import Header from './ui/Header';
import Footer from './ui/Footer';
import LandingPage from './LandingPage';
import ResourcesPage from './ResourcesPage';
import SuccessStoriesPage from './SuccessStoriesPage';
import GPWinnerDetailsPage from './GPWinnerDetailsPage';
import GPNationalWinnerPage from './GPNationalWinnerPage';
import GPStateWinnerPage from './GPStateWinnerPage';
import FAQPage from './faqPage';
import AboutUsPage from './AboutUsPage';
import ContactUsPage from './ContactUsPage';
import UnderConstruction from './ui/UnderConstruction';

function App() {

  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        <Switch>
          <Route exact path="/" component={() => <LandingPage setValue={setValue} setSelectedIndex={setSelectedIndex}/>} />
          <Route exact path="/visvas" component={() => <LandingPage setValue={setValue} setSelectedIndex={setSelectedIndex}/>} />
          <Route exact path="/resources" component={() => <ResourcesPage setValue={setValue} setSelectedIndex={setSelectedIndex}/>} />
          <Route exact path="/gp-circulars" component={UnderConstruction} />
          <Route exact path="/gp-guidlines" component={UnderConstruction} />
          <Route exact path="/gp-tools" component={UnderConstruction} />
          <Route exact path="/GP-Success-Stories" component={() => <SuccessStoriesPage setValue={setValue} setSelectedIndex={setSelectedIndex}/>} />
          <Route exact path="/GP-Success-Stories/GP-Details" component={UnderConstruction} />
          <Route exact path="/National-Award-Winner-GP" component={GPNationalWinnerPage} />
          <Route exact path="/State-Award-Winner-GP" component={GPStateWinnerPage} />
          <Route exact path="/Child-Friendly-GP" component={UnderConstruction} />
          <Route exact path="/faq" component={FAQPage} />
          <Route exact path="/about" component={AboutUsPage} />
          <Route exact path="/contact" component={ContactUsPage} />
        </Switch>
        <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
