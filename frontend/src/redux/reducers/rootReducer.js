import itemsReducer from './itemsReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  items: itemsReducer,
});
