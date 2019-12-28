import React, { useEffect } from 'react';
import { NavigationActions } from 'react-navigation';
import { TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '../../assets/logoHeader.png';

import { Container, HelpContainer, HelpHeader, HelpTitle, HelpTime, HelpMessage } from './styles';

export default function HelpDetails({ navigation }) {
    
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
            
            <HelpContainer>
                <HelpHeader>
                    <HelpTitle>PERGUNTA</HelpTitle>
                    <HelpTime>Hoje as 14hs</HelpTime>
                </HelpHeader>
                <HelpMessage>
                    Olá pessoal da academia, gostaria de saber se quando acordar devo ingerir batata doce e frango 
                    logo de primeira, preparar as marmitas e lotar a geladeira?
                </HelpMessage>

                <HelpTitle>RESPOSTA</HelpTitle>
                <HelpMessage>
                    Opa, isso aí, duas em duas horas, não deixa pra
                    depois, um monstro treina como um, come como dois.
                </HelpMessage>
            </HelpContainer>

        </Container>
    );
}

HelpDetails.navigationOptions = screenProps => ({
    headerTitle: (<Image source={logo} style={{ width: 133, height: 30 }}/>),
    headerLeft: (
        <TouchableOpacity style={{ paddingLeft: 20 }} onPress={screenProps.navigation.getParam('closeScreen')}>
            <Icon name="chevron-left" size={25} color="#000" />
        </TouchableOpacity>
    ),
});
