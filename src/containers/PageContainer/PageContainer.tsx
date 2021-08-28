// Dependencies
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Externals
import SearchField from '../../components/SearchField';
import CardList from '../../components/CardList';
import PaginationList from '../../components/PaginationList';
import { RootState } from '../../types/types';
import { fetchCharacters } from '../../actions/cardActions';

const PageContainer: React.FC = () => {
  const { cards, loading, err } = useSelector((state: RootState) => state.cardReducer);
  const [term, setTerm] = useState('');

  const dispatch = useDispatch();

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.currentTarget.value);
  };

  useEffect(() => {
    if (term === '') {
      dispatch(fetchCharacters(term))
    } else if (term.length >= 2) {
      setTimeout(dispatch(fetchCharacters(term)), 500)
    }
  }, [term]);

  return (
    <>
      <SearchField onSearchChange={onSearchChange} term={term} />
      <PaginationList term={term} />
      <CardList cards={cards} loading={loading} err={err} />
    </>
  );
};

export { PageContainer };
