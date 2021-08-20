// Dependencies
import React from 'react';
import { useSelector } from 'react-redux';

// Externals
import './CardList.css';
import { RootState } from '../../types/types';
import { Card } from '../Card/Card';

const CardList: React.FC = () => {
  const cards = useSelector((state: RootState) => state.cardReducer.cards);

  return (
    <div className='list-items__container'>
      <ul className='list-items'>
        {cards.map((card: any) => (
          <Card key={card.id} name={card.name}/>
        ))}
      </ul>
    </div>
  );
};

export { CardList };
