// Externals
import { FETCH_PAGES_SUCCESS, FETCH_CURRENT_PAGE_SUCCESS } from '../actionTypes';

const initialState = {
  pages: 0,
  currentPage: 0,
};

export type initialStateType = typeof initialState;

const pageReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case FETCH_PAGES_SUCCESS: {
      return {
        ...state,
        pages: action.payload,
      };
    }
      
    case FETCH_CURRENT_PAGE_SUCCESS: {
      return {
        ...state,
        currentPage: action.payload
      }
    }

    default:
      return state;
  }
};

export default pageReducer;
