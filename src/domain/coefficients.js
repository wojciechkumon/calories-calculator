import {Genders} from './Gender';
import {Activities} from './Activity';

const FEMALE_COEFFICIENT = -161;
const MALE_COEFFICIENT = 5;

const NO_ACTIVITY_COEFFICIENT = 1.2;
const LIGHT_ACTIVITY_COEFFICIENT = 1.375;
const AVERAGE_ACTIVITY_COEFFICIENT = 1.55;
const HIGH_ACTIVITY_COEFFICIENT = 1.725;

export const getGenderCoefficient = gender => {
  switch (gender) {
    case Genders.FEMALE:
      return FEMALE_COEFFICIENT;
    case Genders.MALE:
      return MALE_COEFFICIENT;
  }
};

export const getActivityCoefficient = activity => {
  switch (activity) {
    case Activities.NO_ACTIVITY:
      return NO_ACTIVITY_COEFFICIENT;
    case Activities.LIGHT_ACTIVITY:
      return LIGHT_ACTIVITY_COEFFICIENT;
    case Activities.AVERAGE_ACTIVITY:
      return AVERAGE_ACTIVITY_COEFFICIENT;
    case Activities.HIGH_ACTIVITY:
      return HIGH_ACTIVITY_COEFFICIENT;
  }
};