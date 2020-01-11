import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LoginBase from './Pages/loginAndSignup/LoginBase';
import SignupBase from './Pages/loginAndSignup/SignupBase';

const MainNavigator = createStackNavigator({
  LoginBase: { screen: LoginBase },
  SignupBase: { screen: SignupBase },
});

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;