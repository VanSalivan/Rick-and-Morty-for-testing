// Dependencies
import { combineReducers } from 'redux';

// Externals
import cardReducer from './cardReducer';
import pageReducer from './pageReducer';

export default combineReducers({
  pageReducer,
  cardReducer,
});
