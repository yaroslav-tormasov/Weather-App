import React from 'react'
import Time from './../Time/Time';
import WeatherMain from './../Weather/WeatherMain';
import {Route} from 'react-router-dom';

function Home() {
    return (
        <div>
            <Route path={"/time"} render={() => <Time/>}/>
            <Route path={"/weather"} render={() => <WeatherMain/>}/>
        </div>
    )
}

export default Home;