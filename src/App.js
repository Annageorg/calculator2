import React from 'react';
import './App.css';
import Buttons from './Components/Buttons';
// import Output from './Components/Output';

class App extends React.Component {

  state = {
    previous: '',
    operation: undefined,
    current: '',
  };

  buttonClickedHandler = (event) => {
    const regEx = /^(\d|\.)$/
    if (event.target.value.match(regEx)) {
      this.appendNumber(event.target.value);
    } else {
      this.chooseOperation(event.target.value);
    }
  }

  appendNumber = (buttonValue) => {
    this.setState((state) => {
      let current = state.current + buttonValue;
      if (buttonValue === '.' && state.current.includes(".")) return;
      if (current === ".") return { current: "0." };
      return { current: state.current + buttonValue }
    })
  }

  chooseOperation = (operationValue) => {
    const regEx = /\+|-|\*|÷/
    if (operationValue.match(regEx)) {
      this.applyOperation(operationValue);
    } else if (operationValue === "=") {
      this.equal();
    } else if (operationValue === "AC") {
      this.allClear();
    } else if (operationValue === "DEL") {
      this.delete();
    } else {
      console.error("unsupported function", operationValue);
    }
  }

  applyOperation = (operationValue) => {
    this.setState((state) => {
      if (state.current === "") return;
      if (state.previous !== "") {
        let result = this.compute();
        return {
          previous: result,
          operation: operationValue,
          current: ''
        }
      }
      return {
        previous: state.current,
        operation: operationValue,
        current: ''
      }
    })
  }

  compute = () => {
    let result = 0;
    if (isNaN(this.state.current) || isNaN(this.state.previous)) return;
    let previous = Number(this.state.previous);
    let current = Number(this.state.current)
    switch (this.state.operation) {
      case '+':
        result = previous + current;
        break;
      case '-':
        result = previous - current;
        break;
      case '*':
        result = previous * current;
        break;
      case '÷':
        result = previous / current;
        break;
      default:
        return;
    }
    return result;
  }

  equal = () => {
    let result = this.compute();
    this.setState({
      previous: "",
      operation: undefined,
      current: result
    })
  }

  allClear = () => {
    this.setState({
      previous: '',
      operation: undefined,
      current: ''
    })
  }
  
  delete = () => {
    if (this.state.current !== "") {
      this.setState((state) => ({
        current: state.current.toString().substring(0, state.current.length - 1)
      }))
    }
  }

  render() {
    return (
      <div className='calculator-grid'>
        test text
        {/* <Output previous={this.state.previous} operation={this.state.operation} current={this.state.current} /> */}
        <Buttons click={this.buttonClickedHandler} />
      </div>

    );
  }
}

export default App;
