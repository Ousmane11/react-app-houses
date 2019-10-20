import React from "react";

import "./App.css";

import { Switch, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Assets from "./components/Assets"




function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
        <main>
          <Switch>
            <Route exact path='/' component={Assets}/>
          </Switch>
        </main>
    </div>
  )
}

export default App
