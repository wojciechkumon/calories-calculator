// @flow
import {Dish} from './Dish';
import {DishTypes} from "./DishType";
import {Food} from "./Food";
import type {DishType} from "./DishType";

export class DailyMenu {
  date: string;
  dishList: Dish[];

  constructor(date: string, dishList: Dish[]) {
    this.date = date;
    this.dishList = dishList;
  }
}

export const newEmptyDailyMenu = (date: string): DailyMenu => {
  return new DailyMenu(date, getEmptyDishList());
};

const getEmptyDishList = (): Dish[] => {
  return Object.values(DishTypes)
      .map(dishType => {
        const typedDishType = ((dishType: any): DishType);
        const foodList: Food[] = [];
        return new Dish(typedDishType, foodList);
      });
};
