import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Container from "@material-ui/core/Container";
import Trending from "./components/Pages/Trending/Trending";
import Search from "./components/Pages/Search/Search";
import Series from "./components/Pages/Series/Series";
import Movies from "./components/Pages/Movies/Movies";

import TagManager from 'react-gtm-module'

import { datadogRum } from '@datadog/browser-rum';



function App() {
  const tagManagerArgs = {
    gtmId: 'GTM-TJBP2G8Q'
  }
  TagManager.initialize(tagManagerArgs)

  datadogRum.init({
    applicationId: '6b11ff59-1004-4779-9cfc-36c8b499ed54',
    clientToken: 'pubdb33a7ac97467ed65e1f7c9326fc9eef',
    // `site` refers to the Datadog site parameter of your organization
    // see https://docs.datadoghq.com/getting_started/site/
    site: 'us5.datadoghq.com',
    service: 'tv-shows',
    env: 'dev',
    // Specify a version number to identify the deployed version of your application in Datadog
    // version: '1.0.0', 
    sessionSampleRate: 100,
    sessionReplaySampleRate: 20,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: 'mask-user-input',
});
  
  return (
    <Router>
      <Header/>
      <div className="app">
        <Container>
        <Switch>          
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>
        
      </div>
      <SimpleBottomNavigation/>
    </Router>
  );


}
export default App;
