import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: props.time, // タイマーの初期時
      isRunning: false,
    };
  }

  startTimer = () => {
    this.setState({ isRunning: true });
    this.timerID = setInterval(() => {
      this.setState((prevState) => {
        if (prevState.time > 0) {
          return { time: prevState.time - 1 };
        } else {
          clearInterval(this.timerID); // タイマー停止
          return { isRunning: false };
        }
      });
    }, 1000); // 1秒ごとにカウントダウン
  }

  stopTimer = () => {
    clearInterval(this.timerID);
    this.setState({ isRunning: false });
  }

  resetTimer = () => {
    clearInterval(this.timerID);
    this.setState({ time: 60, isRunning: false });
  }

  render() {
    return (
      <div>
        <h1>Timer: {this.state.time}</h1>
        <button onClick={this.startTimer} disabled={this.state.isRunning}>Start</button>
        <button onClick={this.stopTimer} disabled={!this.state.isRunning}>Stop</button>
        <button onClick={this.resetTimer}>Reset</button>
      </div>
    );
  }
}

export default Timer;
