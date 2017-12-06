// @flow
import {foodTypes} from '../domain/foodTypes';
import {FoodType} from '../domain/FoodType';
import _ from 'lodash';

export class FoodTypesService {

  static findFoodType = (nameToFind /*:: : string */) /*:: : ?FoodType */ => {
    return foodTypes[nameToFind];
  };

  static findFoodTypes = (nameSubstring /*:: : string */, limit /*:: : number */) /*:: : FoodType[] */ => {
    let foodTypesList /*:: : Array<FoodType> */ =
        ((Object.values(foodTypes) /*:: : any */)/*:: : Array<FoodType> */);
    return _.chain(foodTypesList)
      .filter((foodType /*:: : FoodType */) /*:: : boolean */ => foodType.name.includes(nameSubstring))
      .take(limit)
      .value();
  };
}
