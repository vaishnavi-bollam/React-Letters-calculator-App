// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    letterCount: 0,
    inputTyped: '',
  }

  inputChangeEvent = event => {
    const {letterCount, inputTyped} = this.state
    const inputTypedvalue = event.target.value
    const inputLength = inputTypedvalue.length
    this.setState({
      inputTyped: inputTypedvalue,
      letterCount: inputLength,
    })
  }

  render() {
    const {letterCount, inputTyped} = this.state
    console.log(inputTyped)
    return (
      <div className="main-bg">
        <div>
          <h1>Calculate the letters you entered</h1>
          <div>
            <label htmlFor="inputEl">Enter the phrase</label>
            <input
              id="inputEl"
              type="search"
              value={inputTyped}
              placeholder="Enter the phrase"
              onChange={this.inputChangeEvent}
            />
          </div>
          <br />
          <p className="button">No.of Letters: {letterCount}</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
