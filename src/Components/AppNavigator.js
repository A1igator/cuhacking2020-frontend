import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LoginBase from './Pages/loginAndSignup/LoginBase';
import SignupBase from './Pages/loginAndSignup/SignupBase';
import BottomNav from './BottomNav';

const MainNavigator = createStackNavigator({
  login: { screen: LoginBase },
  signup: { screen: SignupBase },
  main: {screen: BottomNav },
});

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;