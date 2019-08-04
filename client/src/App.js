import React from 'react';

//import Home from './components/pages/Home';
import './App.scss';

////===pages
import WorkPage from "./pages/work";
import ContactPage from "./pages/contact";
import AboutPage from "./pages/about";
import IndexPage from "./pages/index";
import NotFoundPage from "./pages/404";
import SpecializePage from './pages/specialize'


import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
//=== set Route
function App() {
  return (<Router>
    <Switch>
      <Route exact path="/" component={IndexPage} />
      <Route path="/home" component={IndexPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/work" component={WorkPage} />
      <Route path="/specialize" component={SpecializePage} />
      <Route path="/contact" component={ContactPage} />
      <Route exact path="/404" component={NotFoundPage} />
      <Redirect to="/404" />
    </Switch>



  </Router>
  );
}

export default App;
