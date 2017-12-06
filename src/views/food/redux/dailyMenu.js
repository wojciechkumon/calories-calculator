import {makeActionCreator} from "../../../util/reduxUtils";
import {
  ADD_FOOD_TO_DISH,
  CURRENT_DAILY_MENU_CHANGED,
  DELETE_FOOD_FROM_DISH
} from "../../../config/actions";

/**
 * Change daily menu action creator
 * @function
 */
export const changeDailyMenu =
    makeActionCreator(CURRENT_DAILY_MENU_CHANGED, 'dailyMenu');

/**
 * Add food to dish and persists action creator
 * @param dishType {DishType}
 * @param food {Food}
 * @return {action}
 */
export const addFoodToDishAndPersist = (dishType, food) => {
  return addFoodToDish(dishType, food);
};

const addFoodToDish = makeActionCreator(ADD_FOOD_TO_DISH, 'dishType', 'food');

/**
 * Delete food from dish and persist action creator
 * @function
 */
export const deleteFoodFromDishAndPersist =
    makeActionCreator(DELETE_FOOD_FROM_DISH, 'dishType', 'foodName');
