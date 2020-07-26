import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/Homepage"
import Catdetail from "./pages/Catdetail"
import SignupPage from "./pages/SignupPage";
import './App.css';

function App() {
  return (
    <div className="App">
      <Link to="/signup">Signup</Link>
      <Switch>
        {/* more pages to be added here later */}
        <Route path="/signup" component={SignupPage} />
        <Route path="/cat/:id" component={Catdetail} />
        <Route path="/" exact component={HomePage} />
      </Switch>

    </div>
  );
}

export default App;
