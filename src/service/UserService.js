// @flow
import {User} from '../domain/User';
import {AsyncStorage} from 'react-native';

export class UserService {

  static getPersistedUserData = (): Promise<?User> => {
    try {
      return readFromStorage(USER_KEY)
        .then(string => {
          if (string) {
            let json = JSON.parse(string);
            return new User(json.name, json.age, json.height, json.activity, json.gender)
          }
        })
    } catch (e) {
      return Promise.resolve();
    }
  };

  static saveUserData = (user: User): Promise<any> => {
    return saveToStorage(USER_KEY, JSON.stringify(user))
  };
}

const USER_KEY = 'user';

async function saveToStorage(key: string, value: string): Promise<void> {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {}
}

async function readFromStorage(key: string): Promise<?string> {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {}
}