import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/Homepage"
import Catdetail from "./pages/Catdetail"
import Signup from "./pages/Signup"
import './App.css';

function App() {
  return (
    <div className="App">
      <Link to="/signup">Signup</Link>
      <Switch>
        {/* more pages to be added here later */}
        <Route path="/cat/:id" component={Catdetail} />
        <Route path="/signup" component={Signup} />
        <Route path="/" exact component={HomePage} />
      </Switch>

    </div>
  );
}

export default App;
