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

export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`
    margin-top: 20px;
`;

export const HelpContainer = styled.TouchableOpacity`
    border-radius: 4px;
    border-color: #999;
    border-width: ${StyleSheet.hairlineWidth}px;
    background: #fff;
    padding: 20px;
    margin-bottom: 10px;
`;

export const HelpHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const HelpStatus = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const HelpStatusText = styled.Text`
    font-size: 14px;
    color: ${props => props.color};
    font-weight: bold;
    margin-left: 10px;
`;

export const HelpTime = styled.Text`
    font-size: 14px;
    color: #666;
`;

export const HelpMessage = styled.Text`
    margin-top: 10px;
    font-size: 14px;
    color: #666;
`;
