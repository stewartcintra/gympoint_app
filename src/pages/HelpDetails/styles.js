import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background: #eee;
    padding: 20px 20px;
`;

export const HelpContainer = styled.View`
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

export const HelpTitle = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #444;
`;

export const HelpTime = styled.Text`
    font-size: 14px;
    color: #666;
`;

export const HelpMessage = styled.Text`
    margin: 20px 0 20px 0;
    font-size: 14px;
    color: #666;
    line-height: 25px;
`;
