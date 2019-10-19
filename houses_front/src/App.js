import React from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Assets from "./components/Assets";
import Entities from "./components/Entities";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
        <main>
          <Assets/>
        </main>
    </div>
  );
}

export default App;
