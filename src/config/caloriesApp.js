import combineReducers from 'redux/es/combineReducers';
import {routerReducer} from 'react-router-redux/es/reducer';
import {userForm} from '../user/redux/userReducer';

export const caloriesApp = combineReducers({
  userForm,
  router: routerReducer
});