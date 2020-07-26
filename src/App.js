import React from 'react';
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/Homepage"
import Catdetail from "./pages/Catdetail"
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        {/* more pages to be added here later */}
        <Route path="/cat/:id" component={Catdetail} />
        <Route component={HomePage} />
      </Switch>

    </div>
  );
}

export default App;
