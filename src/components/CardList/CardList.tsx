// Dependencies
import React from 'react'

// Externals
import './CardList.css';
import Spinner from '../Spinner';
import { Card } from '../Card/Card';
import { ICharacter } from '../../types/character';
import ErrorIndicator from '../ErrorIndicator';

type CardListProps = {
  cards: ICharacter[];
  loading: boolean;
  err: boolean;
};

const CardList = ({ cards, loading, err }: CardListProps) => {
  if (loading) {
    return <Spinner />;
  }

  if (err) {
    return <ErrorIndicator/>
  }

  return (
    <div className='list-items__container'>
      <ul className='list-items'>
        {!cards && !err? (
          <div>Ничего не найдено</div>
        ) : (
          cards.map((card) => (
            <Card
              key={card.id}
              name={card.name}
              status={card.status}
              species={card.species}
              image={card.image}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export { CardList };
