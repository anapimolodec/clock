import React from 'react';
import './Clock.css';


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() { //to set up a timer whenever the Clock is rendered to the DOM for the first time
    this.timerID = setInterval(
      () => this.tick(), 1000);
  }
  componentWillMount() {//to clear that timer whenever the DOM produced by the Clock is removed
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div className = "tc">
        <h1> Salem! </h1>
        <h2> It is {this.state.date.toLocaleTimeString()}. </h2>
      </div>
    );
  }
}

export default Clock;
