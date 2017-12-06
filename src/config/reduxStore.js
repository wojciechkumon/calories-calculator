import createStore from 'redux/es/createStore';
import applyMiddleware from 'redux/es/applyMiddleware';
import thunkMiddleware from 'redux-thunk';
import {caloriesApp} from './caloriesApp';

/**
 * Method to create new empty redux store
 * @function
 * @returns redux store
 */
export const buildNewStore = () => {
  return createStore(caloriesApp, getMiddleware());
};

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(thunkMiddleware);
  } else {
    const logger = require("redux-logger").createLogger();
    return applyMiddleware(thunkMiddleware, logger);
  }
};
