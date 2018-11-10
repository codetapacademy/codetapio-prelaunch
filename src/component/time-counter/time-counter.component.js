import React, { Component } from 'react';

class TimeCounter extends Component {
    state = {
        timerValue: 0
    }

    componentDidMount() {
        const { time } = this.props;
        const date = new Date(time).getTime();
        const now = Date.now();
        const timerValue = Math.abs(date - now);
        /**
         * I want to render the TimeCounter component each second and let
         * the renderTime() function get fresh and accurate time. I worry
         * that if I don't take into account the render time it might add up.
         */
        this.setState({timerValue})
        console.log(date, now, timerValue)
        setInterval(() => {
            this.setState(state => {
                state.timerValue-=1000;
                return state;
            })
        }, 1000)
        return time + '';
    }

    renderTime = () => {
        let { timerValue } = this.state;
        const seconds = Math.floor(timerValue / 1000) % 60;
        const minutes = Math.floor(timerValue / (1000 * 60)) % 60;
        const hours   = Math.floor(timerValue / (1000 * 60 * 60)) % 24;
        const days    = Math.floor(timerValue / (1000 * 60 * 60 * 24));
        console.log(timerValue, hours, minutes, seconds);

        const timeString = `${days} days ${hours}:${minutes}:${seconds}`;

        return (
            <div>{timeString}</div>
        )
    }

    render() {
        return (
            <div className="time-counter">
                {this.renderTime()}
            </div>
        )
    }
}

export default TimeCounter