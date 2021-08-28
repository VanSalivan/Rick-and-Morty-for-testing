// Dependencies
import React from 'react';

// Externals
import './Card.css';

interface ICardProps {
  name: string;
  status: string;
  species: string;
  image: string;
}

const Card = ({ name, status, species, image }: ICardProps) => {
  const divStyle = {
    backgroundImage: `url('${image}')`,
  };

  return (
    <li className='list-item' style={divStyle}>
      <div className='list-item__tooltip t2'>
        <div className='tooltip-item__text'>Name : {name}</div>
        <div className='tooltip-item__text'>Status : {status}</div>
        <div className='tooltip-item__text'>Species : {species}</div>
      </div>
    </li>
  );
};

export { Card };
