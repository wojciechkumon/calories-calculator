// @flow
import {Food} from './Food';

export class Dish {
  type: string;
  foodList: Food[];

  constructor(type: string, foodList: Food[]) {
    this.type = type;
    this.foodList = foodList;
  }
}