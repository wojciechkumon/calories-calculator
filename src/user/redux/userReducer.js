import {createReducer} from '../../util/reduxUtils';
import {
  USER_AGE_CHANGED,
  USER_GENDER_CHANGED,
  USER_HEIGHT_CHANGED,
  USER_WEIGHT_CHANGED
} from "../../config/actions";

const userStartingState = {
  weight: '',
  age: '',
  height: '',
  gender: 'F'
};

export const user = createReducer(userStartingState, {
  [USER_WEIGHT_CHANGED](state, action) {
    return {...state, weight: action.weight};
  },
  [USER_AGE_CHANGED](state, action) {
    return {...state, age: action.age};
  },
  [USER_HEIGHT_CHANGED](state, action) {
    return {...state, height: action.height};
  },
  [USER_GENDER_CHANGED](state, action) {
    return {...state, gender: action.gender};
  }
});