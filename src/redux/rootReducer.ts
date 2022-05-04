import { combineReducers } from 'redux';
import authReducer from './auth';
import addressReducer from './address';
import sliderReducer from './slider';
import colorReducer from './color';
import genderReducer from './gender';
import sizeReducer from './size';
import productReducer from './product';
import reviewReducer from './review';
import cartReducer from './cart';

const rootReducer = combineReducers({
  auth: authReducer,
  address: addressReducer,
  slider: sliderReducer,
  color: colorReducer,
  gender: genderReducer,
  size: sizeReducer,
  product: productReducer,
  review: reviewReducer,
  cart: cartReducer,
});

export default rootReducer;
