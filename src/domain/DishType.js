// @flow

/**
 * DishTypes domain enum
 * @enum
 * @type {{BREAKFAST: string, LUNCH: string, DINNER: string, SNACK: string, SUPPER: string}}
 */
export const DishTypes = {
    BREAKFAST: 'BREAKFAST',
    LUNCH: 'LUNCH',
    DINNER: 'DINNER',
    SNACK: 'SNACK',
    SUPPER: 'SUPPER'
};

/*::
export type DishType = $Keys<typeof DishTypes>
*/
