import combineReducers from 'redux/es/combineReducers';
import {routerReducer} from 'react-router-redux/es/reducer';
import {user} from '../views/user/redux/userReducer';
import {userForm} from '../views/user/redux/userFormReducer';
import {menuDate} from '../views/food/redux/menuDateReducer';

export const caloriesApp = combineReducers({
  user,
  userForm,
  menuDate,
  router: routerReducer
});
