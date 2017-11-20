import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from 'react-router-native';
import Provider from 'react-redux/es/components/Provider';
import UserView from '../views/user/UserView';
import {UserService} from '../service/UserService';
import {setUserData} from '../views/user/redux/user';
import {TabNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements';
import FoodView from "../views/food/FoodView";
import InfoView from "../views/info/InfoView";
import MacroView from "../views/macro/MacroView";

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
        <Tabs/>
      </Provider>
    );
  }
}

export const Tabs = TabNavigator({
  Me: {
    screen: UserView,
    navigationOptions: {
      tabBarLabel: 'Me',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },
  Info: {
    screen: InfoView,
    navigationOptions: {
      tabBarLabel: 'Info',
      tabBarIcon: ({ tintColor }) => <Icon name="info" size={35} color={tintColor} />
    },
  },
  Macro: {
    screen: MacroView,
    navigationOptions: {
      tabBarLabel: 'Macro',
      tabBarIcon: ({ tintColor }) => <Icon name="pie-chart" size={35} color={tintColor} />
    },
  },
  Food: {
    screen: FoodView,
    navigationOptions: {
      tabBarLabel: 'Food',
      tabBarIcon: ({ tintColor }) => <Icon name="schedule" size={35} color={tintColor} />
    },
  }
});


Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;