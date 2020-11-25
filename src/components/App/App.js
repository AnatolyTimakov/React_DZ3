import React, { Component } from 'react';
import Step from '../Step/Step';
import PersonalForm from '../PersonalForm/PersonalForm';
import CardForm from '../CardForm/CardForm';
import FinalForm from '../FinalForm/FinalForm'
import './App.css';

class App extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: ''
  };

  renderForm() {
    if (this.state.step === 1) {
      return (
        <PersonalForm
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          changeFirstName={this.changeFirstName}
          changeLastName={this.changeLastName}
          changeEmail={this.changeEmail}
        />
      );
    } else if (this.state.step === 2) {
      return (
        <CardForm
          cardNumber={this.state.cardNumber}
          changeCardNumber={this.changeCardNumber}
        />
      );
    } else {
      return (
        <FinalForm
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          cardNumber={this.state.cardNumber}
        />
      );
    }
  }

  isFormCommitable() {
    if (this.state.step === 1) {
      if (
        this.state.firstName !== '' &&
        this.state.lastName !== '' &&
        this.state.email !== '' &&
        this.state.email.includes('@')
      ) {
        return true;
      } else {
        return false;
      }
    } else if (this.state.step === 2) {
      let input_num = this.state.cardNumber.replace(/-/g, '');
      if (
        input_num.length === 16 &&
        input_num.match(/[\D]/g) === null
      ) {
        return true;
      } else {
        return false;
      }
    }
  }

  handleClickNextForm = () => {
    this.setState({ step: this.state.step + 1 });
  };

  changeFirstName = value => {
    this.setState({ firstName: value });
  };

  changeLastName = value => {
    this.setState({ lastName: value });
  };

  changeEmail = value => {
    this.setState({ email: value });
  };

  changeCardNumber = value => {
    this.setState({ cardNumber: value });
  };

  changeStep = value => {
    this.setState({ step: value });
  };

  render() {
    const {
      handleClickNextForm,
      state: { step }
    } = this;

    return (
      <div className="container">
        <div className="tab-panel">
          <Step number={step} changeStep={this.changeStep} />
        </div>
        <div className="form-content">{this.renderForm()}</div>
        <div className="button-panel">
          <button
            className="button-next"
            disabled={this.isFormCommitable() ? '' : 'disabled'}
            onClick={handleClickNextForm}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default App;
