import React, { Component } from 'react';
import './CardForm.css';

class CardForm extends Component {
  
  state = {
    isValidate: true
  };

  handleChangeForm = event => {
    let input_num = event.target.value.replace(/-/g, '');
    if (input_num.match(/[\D]/g) != null){
      this.setState({ isValidate: false });
    }
    else if (
      (input_num.length % 4 === 0) &&
      (input_num.length != 16) &&
      (input_num.length != 0) &&
      (input_num.match(/[\D]/g) == null)
    ) {
      event.target.value += '-';
      this.setState({ isValidate: true });
    }
    this.props.changeCardNumber(event.target.value);
  };

  render() {
    return (
      <div className="card-form">
        <input
          placeholder="Введите номер карты в формате: 0000000000000000"
          value={this.props.cardNumber}
          onChange={this.handleChangeForm}
          maxLength="19"
          className = {this.state.isValidate ? '' : 'input-wrong'}
        />
      </div>
    );
  }
}

export default CardForm;
