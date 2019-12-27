import React from 'react';
import { Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '../../assets/logo.png';

import { Container, Header, Logo } from './styles';

export default function Check() {
    return (
        <Container>
            <Header>
                <Logo source={logo} />
            </Header>

            <Text>teste</Text>
        </Container>
    );
}

// Checkins.navigationOptions = {
//     tabBarLabel: 'Check-ins',
//     tabBarIcon: ({ tintColor }) => <Icon name="edit-location" size={25} color={tintColor} />
// }
