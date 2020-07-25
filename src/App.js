import React from 'react';
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/Homepage"
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        {/* more pages to be added here later */}
        <Route component={HomePage} />
      </Switch>

    </div>
  );
}

export default App;
