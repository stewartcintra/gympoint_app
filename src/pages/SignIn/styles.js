import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background: #fff;
    margin: 20px 20px;
`;

export const Logo = styled.Image``;

export const FormInput = styled.TextInput.attrs({
    placeholderTextColor: '#999'
})`
    align-self: stretch;
    border-color: #999;
    border-width: ${StyleSheet.hairlineWidth}px;
    border-radius: 4px;
    height: 55px;
    padding: 0 20px;
    font-size: 16px;
    margin-top: 20px;
`;

export const ButtonSubmit = styled.TouchableOpacity`
    background: #ee4d64;
    align-self: stretch;
    justify-content: center;
    align-items: center;
    height: 55px;
    border-radius: 4px;
    margin-top: 20px;
`;

export const ButtonSubmitText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #fff;
`;
