// @flow
import {FoodType} from "./FoodType";

export class Food {
  foodType: FoodType;
  grams: number;

  constructor(foodType: FoodType, grams: number) {
    this.foodType = foodType;
    this.grams = grams;
  }
}