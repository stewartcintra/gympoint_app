import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background: #eee;
    padding: 0 20px;
`;

export const Button = styled.TouchableOpacity`
    background: #ee4d64;
    align-self: stretch;
    justify-content: center;
    align-items: center;
    height: 55px;
    border-radius: 4px;
    margin-top: 20px;
`;

export const ButtonText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #fff;
`;

export const FormInput = styled.TextInput.attrs({
    placeholderTextColor: '#999'
})`
    background: #fff;
    align-self: stretch;
    border-color: #999;
    border-width: ${StyleSheet.hairlineWidth}px;
    border-radius: 4px;
    height: 300px;
    padding: 0 20px;
    font-size: 16px;
    margin-top: 20px;
`;
