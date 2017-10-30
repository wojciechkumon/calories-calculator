import {createReducer} from '../../util/reduxUtils';

const userStartingState = {
  loggedIn: false,
  isAuthenticating: true,
  isFetchingAuthRequest: false,
  isLoggingOut: false
};

export const user = createReducer(userStartingState, {});