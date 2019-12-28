import React from 'react';
import { Image } from 'react-native';

const data = [1,2,3,4,5,6];

import logo from '../../assets/logoHeader.png';

import { Container, Button, ButtonText, List, Checkin, CheckinTitle, CheckinText } from './styles';

export default function Check() {
    return (
        <Container>

            <Button>
                <ButtonText>Novo check-in</ButtonText>
            </Button>

            <List 
                data={data}
                keyExtractor={item => String(item)}
                renderItem={({ item }) => (
                    <Checkin>
                        <CheckinTitle>Check-in #{item}</CheckinTitle>
                        <CheckinText>Hoje as 14hs</CheckinText>
                    </Checkin>
                )}
            />
        </Container>
    );
}

Check.navigationOptions = {
    headerTitle: (<Image source={logo} style={{ width: 133, height: 30 }}/>),
}
