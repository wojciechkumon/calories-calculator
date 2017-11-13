// @flow

import type {Activity} from "./Activity";
import type {Gender} from "./Gender";

export class User {
  name: string;
  age: number;
  height: number;
  activity: Activity;
  gender: Gender;

  constructor(name: string, age: number, height: number, activity: Activity, gender: Gender) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.activity = activity;
    this.gender = gender;
  }
}