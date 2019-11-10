import { combineReducers } from 'redux';
import initialReducer from './initialReducer';

export default combineReducers({
  initial: initialReducer,
});
