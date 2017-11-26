// @flow
import {User} from '../domain/User';
import {readFromStorage, saveToStorage} from "./asyncStorageUtils";

export class UserService {

  static getPersistedUserData = (): Promise<?User> => {
    try {
      return readFromStorage(USER_KEY)
        .then(string => {
          if (string) {
            const json = JSON.parse(string);
            return new User(json.weight, json.age, json.height, json.activity, json.gender)
          }
        })
    } catch (e) {
      return Promise.resolve();
    }
  };

  static saveUserData = (user: User): Promise<any> => {
    return saveToStorage(USER_KEY, JSON.stringify(user));
  };
}

const USER_KEY = 'user';
