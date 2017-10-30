import createStore from 'redux/es/createStore';
import applyMiddleware from 'redux/es/applyMiddleware';
import createHistory from 'history/createMemoryHistory';
import {routerMiddleware} from 'react-router-redux/es/index';
import thunkMiddleware from 'redux-thunk';
import {caloriesApp} from './caloriesApp';

export const history = createHistory();

export const buildNewStore = () => {
  return createStore(caloriesApp, getMiddleware());
};

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(thunkMiddleware, routerMiddleware(history));
  } else {
    const logger = require("redux-logger").createLogger();
    return applyMiddleware(thunkMiddleware, routerMiddleware(history), logger);
  }
};