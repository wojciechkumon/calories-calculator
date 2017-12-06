import {createReducer} from '../../../util/reduxUtils';
import {
  ADD_FOOD_TO_DISH,
  CURRENT_DAILY_MENU_CHANGED, DELETE_FOOD_FROM_DISH,
} from '../../../config/actions';
import {Dish} from "../../../domain/Dish";
import {DailyMenu} from "../../../domain/DailyMenu";
import {DailyMenuService} from "../../../service/DailyMenuService";

const dailyMenuStartingState = {
  current: undefined
};

/**
 * dailyMenu reducer
 * @returns {Function}
 */
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

    const dishNewFood = dishToAddFood.foodList
        .filter(food => food.foodType.name !== action.food.foodType.name)
        .concat([action.food]);
    const changedDish =
        new Dish(action.dishType, dishNewFood);
    const newDailyMenu =
        new DailyMenu(oldDailyMenu.date, [...dishesToCopy, changedDish]);
    DailyMenuService.saveDailyMenu(newDailyMenu);
    return {current: newDailyMenu};
  },
  [DELETE_FOOD_FROM_DISH](state, action) {
    const oldDailyMenu = state.current;
    const dishesToCopy = oldDailyMenu.dishList
        .filter(dish => dish.dishType !== action.dishType);
    const dishToDeleteFood = oldDailyMenu.dishList
        .filter(dish => dish.dishType === action.dishType)[0];

    const foodToSave = dishToDeleteFood.foodList
        .filter(food => food.foodType.name !== action.foodName);
    const changedDish =
        new Dish(action.dishType, foodToSave);
    const newDailyMenu =
        new DailyMenu(oldDailyMenu.date, [...dishesToCopy, changedDish]);
    DailyMenuService.saveDailyMenu(newDailyMenu);
    return {current: newDailyMenu};
  }
});
