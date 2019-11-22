import React, { Component } from 'react';
import '../style/style.css';

import Hasil from './event/hasil';
import Tombol from './event/event';

class App extends Component {
  state = {
    result: ''
  };
  buttonPressed = buttonName => {
    if (buttonName === "=") {
      this.calculate();
    } else if (buttonName === "clear") {
      this.reset();
    } else if (buttonName === "CE") {
      this.backspace()
    } else
      this.setState({
        result: this.state.result + buttonName
      });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  }

  reset = () => {
    this.setState({
      result: ''
    });
  };

  calculate = () => {
    try {
      this.setState({
        result: eval(this.state.result)
      });
    } catch (e) {
      this.setState({
        result: "error"
      })
    }
  };

  render() {
    return (
      <div className="wraperform">
        <Hasil results={this.state.result} />
        <Tombol buttonPressed={this.buttonPressed} />
      </div>
    );
  }
}

export default App;