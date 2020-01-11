import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import HomePage from './Pages/Home/HomePage';
import ProfilePage from './Pages/Profile/ProfilePage';
import Search from './Pages/Search/SearchPage';

export default class BottomNav extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'home', title: 'Home', icon: 'queue-music' },
      { key: 'profile', title: 'Profile', icon: 'album' },
      { key: 'search', title: 'Search', icon: 'history' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    home: HomePage,
    profile: ProfilePage,
    search: Search,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}