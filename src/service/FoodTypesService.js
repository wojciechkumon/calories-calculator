// @flow
import {foodTypes} from '../domain/foodTypes';
import {FoodType} from '../domain/FoodType';
import _ from 'lodash';

/**
 * FoodTypesService
 */
export class FoodTypesService {

  /**
   * Find food type when exists, otherwise returns undefined
   * @method
   * @param nameToFind {string}
   * @returns {?FoodType}
   */
  static findFoodType = (nameToFind /*:: : string */) /*:: : ?FoodType */ => {
    return foodTypes[nameToFind];
  };

  /**
   * Finds all food types matching given substring
   * @method
   * @param nameSubstring {string}
   * @param limit {number}
   * @returns FoodType[]
   */
  static findFoodTypes = (nameSubstring /*:: : string */, limit /*:: : number */) /*:: : FoodType[] */ => {
    let foodTypesList /*:: : Array<FoodType> */ =
        ((Object.values(foodTypes) /*:: : any */)/*:: : Array<FoodType> */);
    return _.chain(foodTypesList)
      .filter((foodType /*:: : FoodType */) /*:: : boolean */ => foodType.name.includes(nameSubstring))
      .take(limit)
      .value();
  };
}
