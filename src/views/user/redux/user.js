// @flow
/*:: import {User} from '../../../domain/User'; */
import {UserService} from '../../../service/UserService';
import {makeActionCreator} from '../../../util/reduxUtils';
import {USER_DATA_CHANGED} from '../../../config/actions';

/**
 * Sets user data and persists
 * @function
 * @param user {User}
 * @return {*}
 */
export const setAndSaveUserData = (user /*:: : User */) => {
  UserService.saveUserData(user);
  return setUserActionCreator(user);
};

/**
 * Sets user data
 * @function
 * @param user {User}
 * @return {*}
 */
export const setUserData = (user /*:: : User */) => {
  return setUserActionCreator(user);
};

const setUserActionCreator = makeActionCreator(USER_DATA_CHANGED, 'user');
