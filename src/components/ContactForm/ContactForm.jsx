import React, { Component } from 'react';
import { StyledForm } from './ContactForm.styled';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeName = evt => {
    this.setState({ name: evt.target.value });
  };
  handleChangeNumber = evt => {
    this.setState({ number: evt.target.value });
  };

  onSubmit = event => {
    this.props.handleSubmit(event);
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { btn } = this.props;

    // console.log(this.state);
    return (
      <div>
        <StyledForm onSubmit={this.onSubmit}>
          <input
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChangeName}
          />
          <input
            type="tel"
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChangeNumber}
          />
          <button type="submit">{btn}</button>
        </StyledForm>
      </div>
    );
  }
}
