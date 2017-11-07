// @flow
import {foodTypes} from '../domain/foodTypes';
import {FoodType} from "../domain/FoodType";

export const findFoodType = (nameToFind: string): FoodType | void => {
  return foodTypes
    .find((foodType: FoodType): boolean => foodType.name === nameToFind);
};

export const findFoodTypes = (nameSubstring: string): Array<FoodType> => {
  return foodTypes
    .filter((foodType: FoodType): boolean => foodType.name.includes(nameSubstring));
};