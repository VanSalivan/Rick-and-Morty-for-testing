// Dependencies
import React from 'react';

// Externals
import './SearchField.css';

const SearchField: React.FC = () => {
  return (
    <div className='search-field__container'>
      <input className='search-field' type='text' />
    </div>
  );
};

export { SearchField };
