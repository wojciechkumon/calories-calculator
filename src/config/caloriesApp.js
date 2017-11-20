import combineReducers from 'redux/es/combineReducers';
import {routerReducer} from 'react-router-redux/es/reducer';
import {user} from '../views/user/redux/userReducer';
import {userForm} from '../views/user/redux/userFormReducer';

export const caloriesApp = combineReducers({
  user,
  userForm,
  router: routerReducer
});