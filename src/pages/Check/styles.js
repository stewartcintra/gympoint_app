import { StyleSheet } from 'react-native'
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background: #eee;
    padding: 0 20px;
`;

export const Header = styled.View`
    justify-content: center;
    align-items: center;
    background: #fff;
    height: 55;
    margin-top: 20px;
`;

export const Logo = styled.Image`
    width: 100;
    height: 40;
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
    margin-top: 10px;
`;

export const Checkin = styled.View`
    background: #fff;
    height: 55px;
    padding: 10px 20px;
    flex-direction: row;
    align-self: stretch;
    justify-content: space-between;
    align-items: center;
    margin: 7px 0;
    border-radius: 4px;
    border-color: #999;
    border-width: ${StyleSheet.hairlineWidth}px;
`;

export const CheckinTitle = styled.Text`
    font-weight: bold;
    color: #444;
    font-size: 14px;
`;

export const CheckinText = styled.Text`
    font-size: 14px;
    color: #666;
`;
