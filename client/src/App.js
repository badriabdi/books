import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <Nav />

      <Switch>
        <Route exact path="/"component = {Books}/>
        <Route exact path="/book"component ={Books}/>
        <Route exact path="/book:id"component ={Detail}/>
        <Route component ={NoMatch}/>
      </Switch>
      
    </Router>
  );
}

export default App;
