import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Nav from "./components/Nav";
import Create from "./pages/Create";
import SinglePost from "./pages/SinglePost";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>App </h2>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/create" exact component={Create} />
          <Route path="/:id" exact component={SinglePost} />
        </Switch>
      </BrowserRouter>
      <Home />
    </div>
  );
}

export default App;
