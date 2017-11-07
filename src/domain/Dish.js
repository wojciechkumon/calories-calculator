// @flow
import {Food} from "./Food";

export class Dish {
  dishType: string;
  foodList: [Food];

  constructor(dishType: string, foodList: [Food]) {
    this.dishType = dishType;
    this.foodList = foodList;
  }
}