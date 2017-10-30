import createStore from 'redux/es/createStore';
import applyMiddleware from 'redux/es/applyMiddleware';
import createHistory from 'history/createMemoryHistory';
import {routerMiddleware} from 'react-router-redux/es/index';
import thunkMiddleware from 'redux-thunk';
import {caloriesApp} from './caloriesApp';

export const history = createHistory();

export const buildNewStore = () => {
  const middleware = applyMiddleware(thunkMiddleware, routerMiddleware(history));
  return createStore(caloriesApp, middleware);
};