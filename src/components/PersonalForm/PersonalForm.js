import React, { Component } from 'react';
import './PersonalForm.css';

class PersonalForm extends Component {
  handleChangeForm = event => {
    if (event.target.name === 'firstName') {
      this.props.changeFirstName(event.target.value);
    } else if (event.target.name === 'lastName') {
      this.props.changeLastName(event.target.value);
    } else {
      this.props.changeEmail(event.target.value);
    }
  };

  render() {
    return (
      <div className="personal-form">
        <input
          name="firstName"
          placeholder="First Name"
          value={this.props.firstName}
          onChange={this.handleChangeForm}
        />
        <input
          name="lastName"
          placeholder="Last Name"
          value={this.props.lastName}
          onChange={this.handleChangeForm}
        />
        <input
          name="email"
          placeholder="Email"
          value={this.props.email}
          onChange={this.handleChangeForm}
        />
      </div>
    );
  }
}

export default PersonalForm;
