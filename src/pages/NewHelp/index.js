import React, { useEffect } from 'react';
import { NavigationActions } from 'react-navigation';
import { TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '../../assets/logoHeader.png';
import { Container, FormInput, Button, ButtonText } from './styles';

export default function NewHelp({ navigation }) {

    useEffect(() => {
        navigation.setParams({closeScreen});

        function closeScreen() {
            const navActions = NavigationActions.back();
            navigation.dispatch(navActions);
            return true;
        }
    }, []);

    return (
        <Container>
            <FormInput
                placeholder="Inclua seu pedido de auxílio"
                multiline={true}
            />

            <Button onPress={() => alert('Pedido enviado com sucesso!')}>
                <ButtonText>Enviar Pedido</ButtonText>
            </Button>
        </Container>
    );
}

NewHelp.navigationOptions = screenProps => ({
    headerTitle: (<Image source={logo} style={{ width: 133, height: 30 }}/>),
    headerLeft: (
        <TouchableOpacity style={{ paddingLeft: 20 }} onPress={screenProps.navigation.getParam('closeScreen')}>
            <Icon name="chevron-left" size={25} color="#000" />
        </TouchableOpacity>
    ),
});
