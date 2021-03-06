// Externals
import { FETCH_CARDS_START, FETCH_CARDS_SUCCESS, FETCH_CARDS_FAILURE, FETCH_PAGES_SUCCESS, FETCH_CURRENT_PAGE_SUCCESS } from './actionTypes';

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


const fetchPagesSuccess = ( pages: number) => {
  return {
    type: FETCH_PAGES_SUCCESS,
    payload: pages
  }
}

const fetchCurrentPageSuccess = (currentPage: number) => {
  return {
    type: FETCH_CURRENT_PAGE_SUCCESS,
    payload: currentPage
  }
}

export { fetchCardsStart, fetchCardsSuccess, fetchCardsFailure, fetchPagesSuccess, fetchCurrentPageSuccess };
