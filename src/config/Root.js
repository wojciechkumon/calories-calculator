import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from 'react-router-native';
import Provider from 'react-redux/es/components/Provider';
import UserView from '../views/user/UserView';
import {UserService} from '../service/UserService';
import {setUserData} from '../views/user/redux/user';
import {StackNavigator, TabNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements';
import FoodView from '../views/food/FoodView';
import InfoView from '../views/info/InfoView';
import MacroView from '../views/macro/MacroView';
import {PINK} from '../common/colors';
import withUserData from '../views/user/withUserData';

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

const getNavigationOptions = (label, iconName) => {
    return {
        tabBarLabel: label,
        tabBarIcon: ({tintColor}) => <Icon name={iconName} size={35} color={tintColor}/>
    }
};

const FoodCreatorStack = StackNavigator({
    FoodHome: {
        screen: withUserData(FoodView),
        navigationOptions: ({navigation}) => ({
            title: 'Food',
            headerTintColor: PINK
        })
    },
    FoodCreator: {
        path: 'creator/:dishType',
        screen: withUserData(InfoView),
        navigationOptions: ({navigation}) => ({
            title: 'Food creator',
            headerTintColor: PINK
        })
    },
});

const Tabs = TabNavigator({
    Me: {
        screen: UserView,
        navigationOptions: getNavigationOptions('Me', 'account-circle')
    },
    Info: {
        screen: InfoView,
        navigationOptions: getNavigationOptions('Info', 'info')
    },
    Macro: {
        screen: withUserData(MacroView),
        navigationOptions: getNavigationOptions('Macro', 'pie-chart')
    },
    Food: {
        screen: FoodCreatorStack,
        navigationOptions: getNavigationOptions('Food', 'schedule'),
    }
}, {
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: PINK,
    },
});


Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;
