import {createReducer} from '../../../util/reduxUtils';
import {USER_DATA_CHANGED} from '../../../config/actions';

const userStartingState = {
  userData: undefined
};

/**
 * User reducer
 * @function
 * @returns {Function}
 */
export const user = createReducer(userStartingState, {
  [USER_DATA_CHANGED](state, action) {
    return {userData: action.user};
  }
});
