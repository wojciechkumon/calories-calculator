import {createReducer} from '../../util/reduxUtils';
import {USER_DATA_CHANGED} from '../../config/actions';
import {User} from '../../domain/User';

const userStartingState: User = {
  userData: undefined
};

export const user = createReducer(userStartingState, {
  [USER_DATA_CHANGED](state, action) {
    return {userData: action.user};
  }
});