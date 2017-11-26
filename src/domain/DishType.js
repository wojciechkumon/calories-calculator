// @flow

export const DishTypes = {
    BREAKFAST: 'BREAKFAST',
    LUNCH: 'LUNCH',
    DINNER: 'DINNER',
    SNACK: 'SNACK',
    SUPPER: 'SUPPER'
};

export type DishType = $Keys<typeof DishTypes>
