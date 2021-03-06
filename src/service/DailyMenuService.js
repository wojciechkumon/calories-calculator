// @flow
import {DailyMenu} from '../domain/DailyMenu';
import {Dish} from '../domain/Dish';
import {Food} from '../domain/Food';
import {readFromStorage, saveToStorage} from './asyncStorageUtils';

/**
 * DailyMenuService
 */
export class DailyMenuService {

    /**
     * Finds DailyMenu for specified date
     * @method
     * @param date {string}
     * @returns {Promise<DailyMenu>}
     */
    static findDailyMenu = (date /*::: string */) /*:: : Promise<?DailyMenu> */ => {
        try {
            return readFromStorage(getDailyMenuKey(date))
                .then(string => {
                    if (string) {
                        const json = JSON.parse(string);
                        return mapToDishMenu(json);
                    }
                })
        } catch (e) {
            return Promise.resolve();
        }
    };

    /**
     * Persists DailyMenu
     * @method
     * @param dailyMenu {DailyMenu}
     * @returns {Promise<void>}
     */
    static saveDailyMenu = (dailyMenu /*:: : DailyMenu */) /*:: : Promise<any> */=> {
        return saveToStorage(getDailyMenuKey(dailyMenu.date), JSON.stringify(dailyMenu));
    };
}

const getDailyMenuKey = (date /*:: : string */) => {
    return `dailyMenu_${date}`
};

const mapToDishMenu = json => {
    const dishList = json.dishList.map(dishJson => {
        return mapToDish(dishJson);
    });
    return new DailyMenu(json.date, dishList);
};

const mapToDish = dishJson => {
    const foodList = dishJson.foodList.map(foodJson => {
       return new Food(foodJson.foodType, foodJson.grams);
    });
    return new Dish(dishJson.dishType, foodList);
};
