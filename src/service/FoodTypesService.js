// @flow
import {foodTypes} from '../domain/foodTypes';
import {FoodType} from '../domain/FoodType';
import _ from 'lodash';

export const findFoodType = (nameToFind: string): ?FoodType => {
  return foodTypes[nameToFind];
};

export const findFoodTypes = (nameSubstring: string, limit: number): FoodType[] => {
  let foodTypesList: Array<FoodType> = ((Object.values(foodTypes): any): Array<FoodType>);
  return _.chain(foodTypesList)
    .filter((foodType: FoodType): boolean => foodType.name.includes(nameSubstring))
    .take(limit)
    .value();
};