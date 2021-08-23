// Dependencies
import React from 'react';

// Externals
import './SearchField.css';

type SearchFieldProps = {
  onSearchChange: React.ChangeEventHandler<HTMLInputElement>,
  term: string
}

const SearchField = ({onSearchChange, term}:SearchFieldProps) => {

  return (
    <div className='search-field__container'>
      <input
        className='search-field'
        type='text'
        value={term}
        onChange={onSearchChange}
      />
    </div>
  );
};

export { SearchField };
