import React, { Component } from 'react';

export class Filter extends Component {
  render() {
    const { onFilterInput, value } = this.props;

    return (
      <>
        <input
          type="text"
          name="filter"
          required
          value={value}
          onChange={onFilterInput}
        />
      </>
    );
  }
}
