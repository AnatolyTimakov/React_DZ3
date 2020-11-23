import React, { Component } from 'react';
import './CardForm.css';

class CardForm extends Component {
  handleChangeForm = event => {
    this.props.changeCardNumber(event.target.value);
  };

  render() {
    return (
      <div className="card-form">
        <input
          placeholder="Введите номер карты в формате: 0000000000000000"
          value={this.props.cardNumber}
          onChange={this.handleChangeForm}
        />
      </div>
    );
  }
}

export default CardForm;
