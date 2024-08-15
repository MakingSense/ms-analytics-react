import Container from "@material-ui/core/Container";
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ConsentDialog from "./components/ConsentDialog/ConsentDialog";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Movies from "./components/Pages/Movies/Movies";
import Search from "./components/Pages/Search/Search";
import Series from "./components/Pages/Series/Series";
import Trending from "./components/Pages/Trending/Trending";
import useGTM from "./hooks/useGTM";

function App() {
  const { consentGiven, handleConsent } = useGTM();

  return (
    <Router>
      <Header />
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
      <SimpleBottomNavigation />
      {!consentGiven && <ConsentDialog onConsent={handleConsent} />}
    </Router>
  );
}

export default App;
