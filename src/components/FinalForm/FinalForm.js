import React, { Component } from 'react';
import './FinalForm.css';

class FinalForm extends Component {

    render() {
        return (
            <div className = "Sum_info">
                <p>Имя: {this.props.firstName}</p>
                <p>Фамилия: {this.props.lastName}</p>
                <p>Почта: {this.props.email}</p>
                <p>Номер карты: {this.props.cardNumber}</p>
            </div>
        );
    }
}

export default FinalForm;