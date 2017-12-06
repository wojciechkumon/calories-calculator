// @flow
import PropTypes from 'prop-types';
import type {Activity} from './Activity';
import type {Gender} from './Gender';
import {getActivityCoefficient, getGenderCoefficient} from './coefficients';

export class User {
  weight: number;
  age: number;
  height: number;
  activity: Activity;
  gender: Gender;

  constructor(weight: number, age: number, height: number, activity: Activity, gender: Gender) {
    this.weight = weight;
    this.age = age;
    this.height = height;
    this.activity = activity;
    this.gender = gender;
  }

  calcBmr() {
    const coefficient = getGenderCoefficient(this.gender);
    return (10 * this.weight) + (6.25 * this.height) - (5 * this.age) + coefficient;
  }

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