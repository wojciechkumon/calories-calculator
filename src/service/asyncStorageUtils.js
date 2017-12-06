import {AsyncStorage} from 'react-native';

export async function saveToStorage(key /*:: : string */, value /*:: : string */) /*:: : Promise<void> */ {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (e) {}
}

export async function readFromStorage(key /*:: : string */) /*:: : Promise<?string> */ {
    try {
        return await AsyncStorage.getItem(key);
    } catch (e) {}
}
