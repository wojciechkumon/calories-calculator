// @flow
import PropTypes from 'prop-types';
import {Dish} from './Dish';
/*:: import type {DishType} from './DishType'; */
import {DishTypes} from './DishType';
/*:: import {Food} from './Food'; */

/**
 * DailyMenu domain object
 */
export class DailyMenu {
/*::
  date: string;
  dishList: Dish[]; */

  /**
   *
   * @param date {string}
   * @param dishList {Dish[]}
   */
  constructor(date /*:: : string */, dishList /*:: : Dish[] */) {
    this.date = date;
    this.dishList = dishList;
  }

  static props = PropTypes.shape({
    date: PropTypes.string.isRequired,
    dishList: PropTypes.arrayOf(Dish.props).isRequired
  });
}

/**
 * Creates empty DailyMenu for specified date
 * @function
 * @param date {string}
 * @returns {DailyMenu}
 */
export const newEmptyDailyMenu = (date /*:: : string */) /*:: : DailyMenu */ => {
  return new DailyMenu(date, getEmptyDishList());
};

const getEmptyDishList = ()/*:: : Dish[] */ => {
  return Object.values(DishTypes)
      .map(dishType => {
        const typedDishType = ( (dishType /*:: : any */) /*:: : DishType */);
        const foodList /*:: : Food[] */ = [];
        return new Dish(typedDishType, foodList);
      });
};
