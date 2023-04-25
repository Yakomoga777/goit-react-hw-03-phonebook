import { ContactItem } from 'components/ContactList/ContactItem';
import React, { Component } from 'react';
// import { nanoid } from 'nanoid';

export class ContactList extends Component {
  render() {
    const { items, handleDelete } = this.props;
    return (
      <>
        <ul>
          {items.map(item => {
            const { id } = item;
            return (
              <ContactItem
                key={id}
                id={item.id}
                name={item.name}
                number={item.number}
                handleDelete={handleDelete}
              />
            );
          })}
        </ul>
      </>
    );
  }
}
