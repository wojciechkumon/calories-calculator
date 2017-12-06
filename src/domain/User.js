// @flow
import PropTypes from 'prop-types';
/*:: import type {Activity} from './Activity';
import type {Gender} from './Gender'; */
import {getActivityCoefficient, getGenderCoefficient} from './coefficients';

/**
 * User domain object
 */
export class User {
/*::
  weight: number;
  age: number;
  height: number;
  activity: Activity;
  gender: Gender; */

  /**
   *
   * @param weight {number} kg
   * @param age {number}
   * @param height {number} cm
   * @param activity {Activity}
   * @param gender {Gender}
   */
  constructor(weight /*:: : number */, age /*:: : number */, height /*:: : number */,
              activity /*:: : Activity */, gender /*:: : Gender */) {
    this.weight = weight;
    this.age = age;
    this.height = height;
    this.activity = activity;
    this.gender = gender;
  }

  /**
   * Calculates Bmr
   * @returns {number}
   */
  calcBmr() {
    const coefficient = getGenderCoefficient(this.gender);
    return (10 * this.weight) + (6.25 * this.height) - (5 * this.age) + coefficient;
  }

  /**
   * Calculates calories intake
   * @returns {number}
   */
  calcIntake() {
    const coefficient = getActivityCoefficient(this.activity);
    const bmr = this.calcBmr();
    return bmr * coefficient;
  }

  static props = PropTypes.shape({
    weight: PropTypes.number.isRequired,
    age: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    activity: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired
  });
}
