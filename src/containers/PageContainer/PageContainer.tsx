// Dependencies
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Externals
import SearchField from '../../components/SearchField';
import CardList from '../../components/CardList';
import { RootState } from '../../types/types';
import { fetchCharacters } from '../../actions/cardActions';

const PageContainer: React.FC = () => {
  const { cards, loading } = useSelector((state: RootState) => state.cardReducer);
  const [term, setTerm] = useState('');

  const dispatch = useDispatch();

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.currentTarget.value);
  };

  useEffect(() => {
    dispatch(fetchCharacters(term));
  }, [term]);

  return (
    <>
      <SearchField onSearchChange={onSearchChange} term={term} />
      <CardList cards={cards} loading={loading} />
    </>
  );
};

export { PageContainer };
