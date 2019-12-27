import React from 'react';
import { StatusBar } from 'react-native';

import RoutesAuth from './src/routesAuth';

export default function App() {
    return (
        <>
            <StatusBar backgroundColor="#fff" barStyle="light-content"/>
            <RoutesAuth />
        </>
    )
}
