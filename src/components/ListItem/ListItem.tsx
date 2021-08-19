// Dependencies
import React from 'react';

// Externals
import './ListItem.css';

const ListItem: React.FC = () => {
  return (
    <div className='list-items__container'>
      <ul className='list-items'>
        <li className='list-item '>
          <div className='list-item__tooltip t2'>
            <div className='tooltip-item__text'>Name :</div>
            <div className='tooltip-item__text'>Status :</div>
            <div className='tooltip-item__text'>Species :</div>
          </div>
        </li>

        <li className='list-item'>
          <div className='list-item__tooltip'>
            <div className='tooltip-item__text'>Name :</div>
            <div className='tooltip-item__text'>Status :</div>
            <div className='tooltip-item__text'>Species :</div>
          </div>
        </li>
        <li className='list-item'>
          <div className='list-item__tooltip'>
            <div className='tooltip-item__text'>Name :</div>
            <div className='tooltip-item__text'>Status :</div>
            <div className='tooltip-item__text'>Species :</div>
          </div>
        </li>
        <li className='list-item'>
          <div className='list-item__tooltip'>
            <div className='tooltip-item__text'>Name :</div>
            <div className='tooltip-item__text'>Status :</div>
            <div className='tooltip-item__text'>Species :</div>
          </div>
        </li>
        <li className='list-item'>
          <div className='list-item__tooltip topArrow'>
            <div className='tooltip-item__text'>Name :</div>
            <div className='tooltip-item__text'>Status :</div>
            <div className='tooltip-item__text'>Species :</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export { ListItem };
