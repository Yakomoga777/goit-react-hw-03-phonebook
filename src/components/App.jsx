import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { nanoid } from 'nanoid';

import { ContactList } from './ContactList/ContactList';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

const theme = {};

const INITIAL_CONTACTS = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export class App extends Component {
  state = {
    contacts: [...INITIAL_CONTACTS],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');

    if (savedContacts != null) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    } else {
      this.setState({ contacts: INITIAL_CONTACTS });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const includesName = this.state.contacts.find(
      contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );

    if (includesName) {
      alert(`${name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          name: name,
          number: number,
          id: nanoid(),
        },
      ],
    }));
  };

  handleChangeFilter = event => {
    this.setState({ filter: event.target.value });
    this.filtersContacts();
  };

  filtersContacts = () => {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(item =>
      item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );

    return filteredContacts;
  };

  //Метод видалення
  handleDelete = id => {
    this.setState(prevState => ({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    }));
  };

  // Функція рендеру:
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <h1>Phonebook</h1>
        <ContactForm btn="Add contact" handleSubmit={this.handleSubmit} />

        <h2>Contacts</h2>
        <Filter
          value={this.state.filter}
          onFilterInput={this.handleChangeFilter}
        />
        <ContactList
          items={this.filtersContacts()}
          handleDelete={this.handleDelete}
        />
      </ThemeProvider>
    );
  }
}
