import React, { Component } from 'react';
import './Step.css';

class Step extends Component {
  state = {
    isClickable: false
  };

  handleClick = event => {
    if (this.props.number === 2) {
      this.props.changeStep(1);
    } else if (this.props.number === 3) {
      if (event.target.innerText === '2') {
        this.props.changeStep(2);
      } else {
        this.props.changeStep(1);
      }
    }
  };

  render() {
    return (
      <div className="general_steps">
        <div className="step">
          <p
            className={
              this.props.number > 1
                ? 'step-clickable step_number'
                : 'step-selected step_number'
            }
            onClick={this.handleClick}
          >
            1
          </p>
          <p className="step_title">Personal info</p>
        </div>
        <div className="step">
          <p
            className={
              this.props.number > 2
                ? 'step-clickable step_number'
                : this.props.number === 2
                ? 'step-selected step_number'
                : 'step_number'
            }
            onClick={this.handleClick}
          >
            2
          </p>
          <p className="step_title">Card info</p>
        </div>
        <div className="step">
          <p
            className={
              this.props.number === 3
                ? 'step-selected step_number'
                : 'step_number'
            }
          >
            3
          </p>
          <p className="step_title">Success!</p>
        </div>
      </div>
    );
  }
}

export default Step;
