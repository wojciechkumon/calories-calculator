// @flow
import {Food} from './Food';
import type {DishType} from "./DishType";

export class Dish {
  dishType: DishType;
  foodList: Food[];

  constructor(dishType: DishType, foodList: Food[]) {
    this.dishType = dishType;
    this.foodList = foodList;
  }
}
