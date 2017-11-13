import combineReducers from 'redux/es/combineReducers';
import {routerReducer} from 'react-router-redux/es/reducer';
import {user} from '../user/redux/userReducer';
import {userForm} from '../user/redux/userFormReducer';

export const caloriesApp = combineReducers({
  user,
  userForm,
  router: routerReducer
});