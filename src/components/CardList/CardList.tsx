// Dependencies
import React from 'react'

// Externals
import './CardList.css';
import Spinner from '../Spinner';
import { Card } from '../Card/Card';
import { ICharacter } from '../../types/character';

type CardListProps = {
  cards: ICharacter[];
  loading: boolean;
};

const CardList = ({ cards, loading }: CardListProps) => {
  if (loading) {
    return <Spinner />;
  }

  return (
    <div className='list-items__container'>
      <ul className='list-items'>
        {!cards ? (
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
