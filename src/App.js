import React from 'react'
import './App.css';
import Menu from './components/Menu/Menu';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Route path={"/"} exact render={() => <Header />}/>
                <Menu/>
                <Home/>
            </div>
        </BrowserRouter>
    )
}

export default App;
