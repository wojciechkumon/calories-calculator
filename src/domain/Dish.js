// @flow
import PropTypes from 'prop-types';
import {Food} from './Food';
import type {DishType} from './DishType';
import {DishTypes} from "./DishType";

export class Dish {
  dishType: DishType;
  foodList: Food[];

  constructor(dishType: DishType, foodList: Food[]) {
    this.dishType = dishType;
    this.foodList = foodList;
  }

  static comparator = (left: Dish, right: Dish) => {
    return dishTypeMapping[left.dishType] - dishTypeMapping[right.dishType];
  };

  static props = PropTypes.shape({
      dishType: PropTypes.string.isRequired,
      foodList: PropTypes.arrayOf(Food.props).isRequired
  });
}

const dishTypeMapping = {
  [DishTypes.BREAKFAST]: 0,
  [DishTypes.LUNCH]: 1,
  [DishTypes.DINNER]: 2,
  [DishTypes.SNACK]: 3,
  [DishTypes.SUPPER]: 4
};
