// Externals
import { FETCH_CARDS_START, FETCH_CARDS_SUCCESS, FETCH_CARDS_FAILURE } from '../actionTypes';
import { ICharacter } from '../types/character';

const initialState = {
  cards: [] as ICharacter[],
  loading: false,
  err: null
};

export type initialStateType = typeof initialState

const cardReducer = (state = initialState, action: any):initialStateType => {
  switch (action.type) {
    case FETCH_CARDS_START: {
      return {
        ...state,
        loading: true,
      };
    }

    case FETCH_CARDS_SUCCESS: {
      return {
        ...state,
        cards: action.payload,
        loading: false,
      };
    }

    case FETCH_CARDS_FAILURE: {
      return {
        ...state,
        loading: false,
        err: action.payload,
      };
    }

    default:
      return state;
  }
};

export default cardReducer;
