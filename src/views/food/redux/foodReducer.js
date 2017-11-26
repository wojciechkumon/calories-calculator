import moment from 'moment';
import {createReducer} from '../../../util/reduxUtils';
import {FOOD_DATE_CHANGED} from '../../../config/actions';
import {DATE_FORMAT} from './food';

const foodStartingState = {
    date: moment().format(DATE_FORMAT)
};

export const food = createReducer(foodStartingState, {
    [FOOD_DATE_CHANGED](state, action) {
        return {date: action.date};
    }
});
