import combineReducers from 'redux/es/combineReducers';
import {user} from '../views/user/redux/userReducer';
import {userForm} from '../views/user/redux/userFormReducer';
import {menuDate} from '../views/food/redux/menuDateReducer';
import {dailyMenu} from '../views/food/redux/dailyMenuReducer';

export const caloriesApp = combineReducers({
  user,
  userForm,
  menuDate,
  dailyMenu
});
