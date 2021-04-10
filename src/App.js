import React from 'react'
import './App.css';
import Menu from './components/Menu/Menu';
import {BrowserRouter, Route} from 'react-router-dom';
import Time from './components/Time/Time';
import WeatherMain from './components/Weather/WeatherMain';


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div>
                    <Menu/>
                    <Route path={"/home"} render={() => <Menu/>}/>
                    <Route path={"/time"} render={() => <Time/>}/>
                    <Route path={"/weather"} render={() => <WeatherMain/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
