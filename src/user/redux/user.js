import {makeActionCreator} from '../../util/reduxUtils';
import {
  USER_ACTIVITY_CHANGED,
  USER_AGE_CHANGED,
  USER_GENDER_CHANGED,
  USER_HEIGHT_CHANGED,
  USER_WEIGHT_CHANGED
} from '../../config/actions';

const setUserWeight = makeActionCreator(USER_WEIGHT_CHANGED, 'weight');
const setUserAge = makeActionCreator(USER_AGE_CHANGED, 'age');
const setUserHeight = makeActionCreator(USER_HEIGHT_CHANGED, 'height');
const setUserGender = makeActionCreator(USER_GENDER_CHANGED, 'gender');
const setUserActivity = makeActionCreator(USER_ACTIVITY_CHANGED, 'activity');

export const setUserField = (name, value) => {
  switch (name) {
    case 'weight':
      return setUserWeight(value);
    case 'age':
      return setUserAge(value);
    case 'height':
      return setUserHeight(value);
    case 'gender':
      return setUserGender(value);
    case 'activity':
      return setUserActivity(value);
  }
  throw new Error('user field name not matched:', name, value);
};