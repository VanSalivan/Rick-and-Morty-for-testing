// Dependencies
import React from 'react';

// Externals
import './App.css';
import CardList from '../CardList';
import SearchField from '../SearchField';

const App: React.FC = () => {
  return (
    <div className='container'>
      <SearchField />
      <CardList />
    </div>
  );
};

export { App };
