import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LogInPage from "./pages/LogInPage";
import Home from "./pages/HomePage";

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

