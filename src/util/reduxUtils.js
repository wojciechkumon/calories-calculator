/**
 * Creates reducer
 * @function
 * @param initialState {any}
 * @param handlers {object}
 * @return {function}
 */
export const createReducer = (initialState, handlers) => {
  return (state = initialState, action) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  }
};

/**
 * Creates action creator
 * @function
 * @param type {string}
 * @param argNames {...string}
 * @return {function}
 */
export const makeActionCreator = (type, ...argNames) => {
  return (...args) => {
    const action = {type};
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });
    return action;
  }
};
