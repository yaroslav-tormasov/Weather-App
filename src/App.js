import React from 'react'
import './App.css';
import Menu from './components/Menu/Menu';
import {HashRouter, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';

function App() {
    return (
        <HashRouter>
            <div className="App">
                <Route path={"/"} exact render={() => <Header />}/>
                <Menu/>
                <Home/>
            </div>
        </HashRouter>
    )
}

export default App;
