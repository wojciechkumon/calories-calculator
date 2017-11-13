import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ConnectedRouter from 'react-router-redux/es/ConnectedRouter';
import {Route, Switch} from 'react-router-native';
import Provider from 'react-redux/es/components/Provider';
import {history} from './reduxStore';
import UserView from '../user/UserView';
import {UserService} from '../service/UserService';
import {setUserData} from '../user/redux/user';

export class Root extends Component {

  componentDidMount() {
    const {dispatch} = this.props.store;

    UserService.getPersistedUserData()
      .then(user => {
        if (user) {
          dispatch(setUserData(user));
        }
      })
  }

  render() {
    const {store} = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" component={UserView}/>
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;