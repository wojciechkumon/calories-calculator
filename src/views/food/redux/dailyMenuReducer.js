import {createReducer} from '../../../util/reduxUtils';
import {
  ADD_FOOD_TO_DISH,
  CURRENT_DAILY_MENU_CHANGED,
} from '../../../config/actions';
import {Dish} from "../../../domain/Dish";
import {DailyMenu} from "../../../domain/DailyMenu";
import {DailyMenuService} from "../../../service/DailyMenuService";

const dailyMenuStartingState = {
  current: undefined
};

export const dailyMenu = createReducer(dailyMenuStartingState, {
  [CURRENT_DAILY_MENU_CHANGED](state, action) {
    return {current: action.dailyMenu};
  },
  [ADD_FOOD_TO_DISH](state, action) {
    const oldDailyMenu = state.current;
    const dishesToCopy = oldDailyMenu.dishList
        .filter(dish => dish.dishType !== action.dishType);
    const dishToAddFood = oldDailyMenu.dishList
        .filter(dish => dish.dishType === action.dishType)[0];
    const changedDish =
        new Dish(action.dishType, [...dishToAddFood.foodList, action.food]);
    const newDailyMenu =
        new DailyMenu(oldDailyMenu.date, [...dishesToCopy, changedDish]);
    DailyMenuService.saveDailyMenu(newDailyMenu);
    return {current: newDailyMenu};
  }
});
