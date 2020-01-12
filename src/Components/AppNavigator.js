import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LoginBase from './Pages/loginAndSignup/LoginBase';
import SignupBase from './Pages/loginAndSignup/SignupBase';
import BottomNav from './BottomNav';
import SearchPage from './Pages/Search/SearchPage'

const MainNavigator = createStackNavigator({
  login: { screen: LoginBase },
  signup: { screen: SignupBase },
  main: {screen: BottomNav },
  search: {screen: SearchPage}
});

const AppNavigator = createAppContainer(MainNavigator);

export default AppNavigator;