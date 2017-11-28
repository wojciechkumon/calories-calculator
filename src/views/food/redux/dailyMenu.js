import {makeActionCreator} from "../../../util/reduxUtils";
import {
  ADD_FOOD_TO_DISH,
  CURRENT_DAILY_MENU_CHANGED,
  DELETE_FOOD_FROM_DISH
} from "../../../config/actions";

export const changeDailyMenu =
    makeActionCreator(CURRENT_DAILY_MENU_CHANGED, 'dailyMenu');

export const addFoodToDishAndPersist = (dishType, food) => {
  return addFoodToDish(dishType, food);
};

const addFoodToDish = makeActionCreator(ADD_FOOD_TO_DISH, 'dishType', 'food');

export const deleteFoodFromDishAndPersist =
    makeActionCreator(DELETE_FOOD_FROM_DISH, 'dishType', 'foodName');