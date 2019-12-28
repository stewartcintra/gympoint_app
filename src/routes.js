import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Chek from './pages/Check';

import Help from './pages/Help';
import NewHelp from './pages/NewHelp';
import HelpDetails from './pages/HelpDetails';

const CheckNavigator = createStackNavigator({
    Chek,
}, {
    headerLayoutPreset: 'center',
});

CheckNavigator.navigationOptions = {
    tabBarLabel: 'Check-ins',
    tabBarIcon: ({ tintColor }) => <Icon name="edit-location" size={25} color={tintColor} />
}

const HelpNavigator = createStackNavigator({
    Help,
    NewHelp,
    HelpDetails,
}, {
    headerLayoutPreset: 'center',
});

HelpNavigator.navigationOptions = {
    tabBarLabel: 'Pedir ajuda',
    tabBarIcon: ({ tintColor }) => <Icon name="live-help" size={25} color={tintColor} />
}

const Routes = createBottomTabNavigator({
    CheckNavigator,
    HelpNavigator,
}, {
    tabBarOptions: {
        keyboardHidesTabBar: true,
        activeTintColor: '#ee4e62',
        inactiveTintColor: '#999',
        style: {
            backgroundColor: '#fff',
            height: 70,
            paddingVertical: 10,
        }
    }
});

export default createAppContainer(Routes);
