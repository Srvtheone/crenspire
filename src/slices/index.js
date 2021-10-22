import { combineReducers } from 'redux';

import usersReducer from './users';
import filterReducer from './filter';

const rootReducer = combineReducers({
  users: usersReducer,
  filter: filterReducer,
});

export default rootReducer;
