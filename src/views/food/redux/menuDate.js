import {makeActionCreator} from '../../../util/reduxUtils';
import {FOOD_DATE_CHANGED} from '../../../config/actions';

/**
 * Date format
 * @type {string}
 */
export const DATE_FORMAT = 'YYYY-MM-DD';

/**
 * Changes date
 * @function
 */
export const changeDate = makeActionCreator(FOOD_DATE_CHANGED, 'date');
