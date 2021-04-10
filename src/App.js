import React from 'react'
import './App.css';
import Menu from "./components/Menu/Menu";
import {BrowserRouter, Route} from "react-router-dom";
import Time from "./components/Time/Time"


function App() {
  return (
      <BrowserRouter>
      <div className="App">
          <Menu />
          <Route path={"/Time"} render={() => <Time/>}/>
      </div>
      </BrowserRouter>
  )
}

export default App;
