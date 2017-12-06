import {AsyncStorage} from 'react-native';

/**
 * Async function which allows persisting data on device
 * @param key {string}
 * @param value {string}
 * @returns {Promise<void>}
 */
export async function saveToStorage(key /*:: : string */, value /*:: : string */) /*:: : Promise<void> */ {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (e) {}
}

/**
 * Async function which allows reading persisted data on device
 * @param key {string}
 * @returns {Promise<*>}
 */
export async function readFromStorage(key /*:: : string */) /*:: : Promise<?string> */ {
    try {
        return await AsyncStorage.getItem(key);
    } catch (e) {}
}
