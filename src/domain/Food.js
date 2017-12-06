// @flow
import PropTypes from 'prop-types';
import {FoodType} from './FoodType';

/**
 * Food domain object
 */
export class Food {
/*::
  foodType: FoodType;
  grams: number; */

  /**
   *
   * @param foodType {FoodType}
   * @param grams {number}
   */
  constructor(foodType /*:: : FoodType */, grams /*:: : number */) {
    this.foodType = foodType;
    this.grams = grams;
  }

  static props = PropTypes.shape({
      grams: PropTypes.number.isRequired,
      foodType: FoodType.props.isRequired
  });
}
