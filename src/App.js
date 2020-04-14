import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import AboutCars from "./components/AboutCars";
import NotFound from "./components/NotFound";
import Naivgation from "./components/Navigation";
import Characters from "./components/Characters";

function App() {
  return (
    <div>
      <Naivgation />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/aboutCars" component={AboutCars} />
        <Route path="/contactus" component={ContactUs} />
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/mario" component={Characters} />
        <Route path="/notFound" component={NotFound} />
        <Redirect to="/notFound" />
      </Switch>
    </div>
  );
}

export default App;
