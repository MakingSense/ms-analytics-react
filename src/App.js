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



function App() {
  const tagManagerArgs = {
    gtmId: 'GTM-TJBP2G8Q'
  }
  TagManager.initialize(tagManagerArgs)
  
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
