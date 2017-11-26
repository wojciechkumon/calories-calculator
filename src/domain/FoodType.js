// @flow
import PropTypes from 'prop-types';

export class FoodType {
  name: string;
  kcal: number;
  protein: number;
  fat: number;
  carbohydrates: number;

  /**
   *
   * @param name food name
   * @param kcal per 100g
   * @param protein per 100g
   * @param fat per 100g
   * @param carbohydrates per 100g
   */
  constructor(name: string, kcal: number, protein: number, fat: number, carbohydrates: number) {
    this.name = name;
    this.kcal = kcal;
    this.protein = protein;
    this.fat = fat;
    this.carbohydrates = carbohydrates;
  }

  static props = PropTypes.shape({
      name: PropTypes.string.isRequired,
      kcal: PropTypes.number.isRequired,
      protein: PropTypes.number.isRequired,
      fat: PropTypes.number.isRequired,
      carbohydrates: PropTypes.number.isRequired
  });
}
