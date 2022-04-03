import { combineReducers } from 'redux';
import authReducer from './auth';
import addressReducer from './address';

const rootReducer = combineReducers({
  auth: authReducer,
  address: addressReducer,
});

export default rootReducer;
