import React from 'react';
import { StiledItem } from './ContactItem.styled';

export function ContactItem({ id, name, number, handleDelete }) {
  return (
    <>
      <StiledItem key={id}>
        <p>
          {name}: {number}
        </p>
        <div></div>
        <button
          type="button"
          onClick={() => {
            handleDelete(id);
          }}
        >
          Delete
        </button>
      </StiledItem>
    </>
  );
}
