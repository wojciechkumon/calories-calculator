import {makeActionCreator} from '../../../util/reduxUtils';
import {
  USER_FORM_ACTIVITY_CHANGED,
  USER_FORM_AGE_CHANGED,
  USER_FORM_GENDER_CHANGED,
  USER_FORM_HEIGHT_CHANGED,
  USER_FORM_WEIGHT_CHANGED
} from '../../../config/actions';

const setUserWeight = makeActionCreator(USER_FORM_WEIGHT_CHANGED, 'weight');
const setUserAge = makeActionCreator(USER_FORM_AGE_CHANGED, 'age');
const setUserHeight = makeActionCreator(USER_FORM_HEIGHT_CHANGED, 'height');
const setUserGender = makeActionCreator(USER_FORM_GENDER_CHANGED, 'gender');
const setUserActivity = makeActionCreator(USER_FORM_ACTIVITY_CHANGED, 'activity');

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
  throw new Error('userForm field name not matched:', name, value);
};