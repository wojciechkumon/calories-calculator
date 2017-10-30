import combineReducers from 'redux/es/combineReducers';
import {routerReducer} from 'react-router-redux/es/reducer';
import {user} from '../user/redux/userReducer';

export const caloriesApp = combineReducers({
  user,
  router: routerReducer
});