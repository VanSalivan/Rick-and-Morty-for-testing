// Dependencies
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Externals
import './CardList.css';
import { RootState } from '../../types/types';
import { Card } from '../Card/Card';
import { fetchCharacters } from '../../actions/cardActions';
import Spinner from '../Spinner';

const CardList: React.FC = () => {
  const cards = useSelector((state: RootState) => state.cardReducer.cards);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  if (cards.length === 0) {
    return <Spinner />
  }

  return (
    <div className='list-items__container'>
        <ul className='list-items'>
          {cards.map((card) => (
            <Card
              key={card.id}
              name={card.name}
              status={card.status}
              species={card.species}
              image={card.image}
            />
          ))}
        </ul>
    </div>
  );
};

export { CardList };
