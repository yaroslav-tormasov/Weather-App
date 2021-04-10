import React, { Component } from 'react';

export default class Time extends Component {
    state = {
        time: new Date ().toLocaleString(),
    };
    componentDidMount = () => {
        setInterval(() => {
            this.setState(() => {
                return {
                    time: new Date ().toLocaleString(),
                };
            })
        }, 1000)
    }
    render() {
        return <h2 className="time" >{this.state.time}</h2>;
    }
}
