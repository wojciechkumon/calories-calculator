import {createReducer} from '../../../util/reduxUtils';
import {CURRENT_DAILY_MENU_CHANGED,} from '../../../config/actions';

const dailyMenuStartingState = {
  current: undefined
};

export const dailyMenu = createReducer(dailyMenuStartingState, {
  [CURRENT_DAILY_MENU_CHANGED](state, action) {
    return {current: action.dailyMenu};
  }
});
