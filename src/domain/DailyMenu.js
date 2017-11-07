// @flow
import {Dish} from "./Dish";

export class DailyMenu {
  date: string;
  dishList: [Dish];

  constructor(date: string, dishList: [Dish]) {
    this.date = date;
    this.dishList = dishList;
  }
}