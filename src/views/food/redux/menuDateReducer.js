import moment from 'moment';
import {createReducer} from '../../../util/reduxUtils';
import {FOOD_DATE_CHANGED} from '../../../config/actions';
import {DATE_FORMAT} from './menuDate';

const menuDateStartingState = {
    date: moment().format(DATE_FORMAT)
};

/**
 * menuDate reducer
 * @returns {Function}
 */
export const menuDate = createReducer(menuDateStartingState, {
    [FOOD_DATE_CHANGED](state, action) {
        return {date: action.date};
    }
});
