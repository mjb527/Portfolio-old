import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/index";
// import Contact from "./components/Contact/index";
// import Portfolio from "./components/Portfolio/index";
// import Project from "./components/Project/index";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

// class
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
          {/*<Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/project/:project">
            <Project />
          </Route>*/}
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
