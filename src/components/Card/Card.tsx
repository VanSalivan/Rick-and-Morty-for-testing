// Dependencies
import React from 'react';

// Externals
import './Card.css';

interface ICard {
  id?: number;
  name: string;
}

const Card = ({ name }:ICard) => {
  return (
    <li className='list-item'>
      <div className='list-item__tooltip t2'>
        <div className='tooltip-item__text'>Name :{name}</div>
        <div className='tooltip-item__text'>Status :</div>
        <div className='tooltip-item__text'>Species :</div>
      </div>
    </li>
  );
};

export { Card };
