import {makeActionCreator} from "../../../util/reduxUtils";
import {CURRENT_DAILY_MENU_CHANGED} from "../../../config/actions";

export const changeDailyMenu =
    makeActionCreator(CURRENT_DAILY_MENU_CHANGED, 'dailyMenu');