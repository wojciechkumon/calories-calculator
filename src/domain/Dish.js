// @flow
import PropTypes from 'prop-types';
import {Food} from './Food';
import type {DishType} from "./DishType";

export class Dish {
  dishType: DishType;
  foodList: Food[];

  constructor(dishType: DishType, foodList: Food[]) {
    this.dishType = dishType;
    this.foodList = foodList;
  }

  static props = PropTypes.shape({
      dishType: PropTypes.string.isRequired,
      foodList: PropTypes.arrayOf(Food.props).isRequired
  });
}
