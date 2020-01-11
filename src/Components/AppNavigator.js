import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LoginBase from './Pages/loginAndSignup/LoginBase';
import SignupBase from './Pages/loginAndSignup/SignupBase';
import ProfilePage from './Pages/Profile/ProfilePage'

const MainNavigator = createStackNavigator({
  LoginBase: { screen: LoginBase },
  SignupBase: { screen: SignupBase },
  ProfilePage: {screen: ProfilePage },
});

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;