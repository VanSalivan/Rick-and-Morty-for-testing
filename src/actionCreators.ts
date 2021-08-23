// Externals
import { FETCH_CARDS_START, FETCH_CARDS_SUCCESS, FETCH_CARDS_FAILURE } from './actionTypes';

// CARDS
const fetchCardsStart = () => {
  return {
    type: FETCH_CARDS_START,
  };
};

const fetchCardsSuccess = (cards: any) => {
  return {
    type: FETCH_CARDS_SUCCESS,
    payload: cards,
  };
};

const fetchCardsFailure = (err: any) => {
  return {
    type: FETCH_CARDS_FAILURE,
    payload: err,
    err: true
  };
};

export { fetchCardsStart, fetchCardsSuccess, fetchCardsFailure };
