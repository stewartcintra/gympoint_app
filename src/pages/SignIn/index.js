import React from 'react';

import logo from '../../assets/logo.png';
import { Container, Logo, FormInput, ButtonSubmit, ButtonSubmitText } from './styles';

export default function SignIn({ navigation }) {
    return (
        <Container>
            <Logo source={logo} />

            <FormInput
                placeholder="Informe seu ID de cadastro"
                keyboardType="number-pad"
            />

            <ButtonSubmit onPress={() => navigation.navigate('Routes')}>
                <ButtonSubmitText>Entrar no sistema</ButtonSubmitText>
            </ButtonSubmit>
        </Container>
    );
}
