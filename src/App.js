import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LogInPage from "./pages/logIn";
import Home from "./pages/home";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/">
          <LogInPage />
        </Route>
      </Switch>
    </Router>
  );
}

