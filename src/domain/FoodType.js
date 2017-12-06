// @flow
import PropTypes from 'prop-types';

/**
 * FoodType domain object
 */
export class FoodType {
/*::
  name: string;
  kcal: number;
  proteins: number;
  fat: number;
  carbohydrates: number; */

  /**
   * @constructor
   * @param name {string} food name
   * @param kcal {number} per 100g
   * @param proteins {number} per 100g
   * @param fat {number} per 100g
   * @param carbohydrates {number} per 100g
   */
  constructor(name /*:: : string */, kcal /*:: : number */, proteins /*:: : number */,
              fat /*:: : number */, carbohydrates /*:: : number */) {
    this.name = name;
    this.kcal = kcal;
    this.proteins = proteins;
    this.fat = fat;
    this.carbohydrates = carbohydrates;
  }

  static props = PropTypes.shape({
      name: PropTypes.string.isRequired,
      kcal: PropTypes.number.isRequired,
      proteins: PropTypes.number.isRequired,
      fat: PropTypes.number.isRequired,
      carbohydrates: PropTypes.number.isRequired
  });
}
