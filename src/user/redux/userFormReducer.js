import {createReducer} from '../../util/reduxUtils';
import {
  USER_ACTIVITY_CHANGED,
  USER_AGE_CHANGED,
  USER_GENDER_CHANGED,
  USER_HEIGHT_CHANGED,
  USER_WEIGHT_CHANGED
} from '../../config/actions';
import {Activities} from '../../domain/Activity';

const userFormStartingState = {
  weight: '',
  age: '',
  height: '',
  gender: 'F',
  activity: Activities.NO_ACTIVITY
};

export const userForm = createReducer(userFormStartingState, {
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
  },
  [USER_ACTIVITY_CHANGED](state, action) {
    return {...state, activity: action.activity};
  }
});