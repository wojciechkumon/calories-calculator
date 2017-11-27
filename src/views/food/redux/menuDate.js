import {makeActionCreator} from '../../../util/reduxUtils';
import {FOOD_DATE_CHANGED} from '../../../config/actions';

export const DATE_FORMAT = 'YYYY-MM-DD';

export const changeDate = makeActionCreator(FOOD_DATE_CHANGED, 'date');
