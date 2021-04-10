import React, { Component } from "react";
import moment from "moment";
import {BrowserRouter} from "react-router-dom";

export default class Time extends Component {
    state = {
        // time: moment().format("MMMM Do , h:mm:ss "),
        time: new Date ().toLocaleString(),
    };
    componentDidMount = () => {
        setInterval(() => {
            this.setState(({ time }) => {
                return {
                    time: new Date ().toLocaleString(),
                };
            })
        }, 1000)
    }
    render() {
        return <h2 className="clock" >{this.state.time}</h2>;
    }
}
