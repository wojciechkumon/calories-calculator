// @flow
import type {Activity} from './Activity';
import type {Gender} from './Gender';

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
}