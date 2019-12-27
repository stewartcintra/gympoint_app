import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from './pages/SignIn';
import Routes from './routes';

export default createAppContainer(
    createSwitchNavigator({
        SignIn,
        Routes,
    })
);