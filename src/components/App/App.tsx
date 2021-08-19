// Dependencies
import React from 'react';

// Externals
import './App.css';
import ListItems from '../ListItem';
import SearchField from '../SearchField';

const App: React.FC = () => {
  return (
    <div className='container'>
      <SearchField />
      <ListItems />
    </div>
  );
};

export { App };
