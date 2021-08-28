// Dependencies
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../types/types';

// Externals
import './PaginationList.css';
import { fetchCharacters } from '../../actions/cardActions';

type PaginationListProps = { term:string };

const PaginationList = ({ term }: PaginationListProps) => {
  const dispatch = useDispatch()
  const { pages, currentPage } = useSelector((state: RootState) => state.pageReducer);

  const getPages = (pageNumber: number) => dispatch(fetchCharacters(term, pageNumber));

  const createPaginationList = (pages: number) => Array.from({ length: pages }, (item, index) => index + 1);
 
  return (
    <div className='pagination__container'>
      {createPaginationList(pages).map((item, index) =>
        (currentPage === item) ?
          <button className='pagination__item active' disabled key={index}>{item}</button>
          :
          <button className='pagination__item'onClick={() => getPages(item)} key={index}>{item}</button>
      )}
    </div>
  );
};

export { PaginationList };
