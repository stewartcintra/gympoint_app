import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const data = [
    {
        id: 1,
        status: false,
        time: 'Hoje as 14hs',
        message: 'Olá pessoal da academia, gostaria de saber se quando acordar devo ingerir batata doce e frango logo de primeira, preparar as...'
    },
    {
        id: 2,
        status: true,
        time: 'Há 3 dias',
        message: 'Olá pessoal da academia, gostaria de saber se quando acordar devo ingerir batata doce e frango logo de primeira, preparar as...'
    }
];

import logo from '../../assets/logoHeader.png';

import { Container, Button, ButtonText, List, HelpContainer, HelpHeader, HelpStatus, HelpStatusText, HelpTime, HelpMessage } from './styles';

export default function Help({ navigation }) {
    return (
        <Container>

            <Button onPress={() => navigation.navigate('NewHelp')}>
                <ButtonText>Novo pedido de auxílio</ButtonText>
            </Button>

            <List 
                data={data}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <HelpContainer onPress={() => navigation.navigate('HelpDetails')}>
                        <HelpHeader>
                            <HelpStatus>
                                <Icon name="check-circle" size={20} color={item.status ? '#42cb59' : '#999'} />
                                <HelpStatusText color={item.status ? '#42cb59' : '#999'}>
                                    {item.status ? 'Respondido' : 'Sem resposta'}
                                </HelpStatusText>
                            </HelpStatus>
                            
                            <HelpTime>{item.time}</HelpTime>
                        </HelpHeader>
                        
                        <HelpMessage>{item.message}</HelpMessage>
                    </HelpContainer>
                )}
            />

        </Container>
    );
}

Help.navigationOptions = {
    headerTitle: (<Image source={logo} style={{ width: 133, height: 30 }}/>),
};
