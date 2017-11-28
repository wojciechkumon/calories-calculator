// @flow
import PropTypes from 'prop-types';

export class FoodType {
  name: string;
  kcal: number;
  proteins: number;
  fat: number;
  carbohydrates: number;

  /**
   *
   * @param name food name
   * @param kcal per 100g
   * @param proteins per 100g
   * @param fat per 100g
   * @param carbohydrates per 100g
   */
  constructor(name: string, kcal: number, proteins: number, fat: number, carbohydrates: number) {
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
