import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import HomePage from './Pages/Home/HomePage';
import ProfilePage from './Pages/Profile/ProfilePage';
import Search from './Pages/Search/SearchPage';

export default class BottomNav extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'home', title: 'Home', icon: 'home' },
      { key: 'profile', title: 'Profile', icon: 'account' },
      { key: 'search', title: 'Search', icon: 'magnify' },
    ],
  };

  homeRoute = () => <HomePage />;
  profileRoute = () => <ProfilePage jwt={this.props.navigation.state.params.jwt}/>
  searchRoute = () => <Search jwt={this.props.navigation.jwt}/>

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    home: this.homeRoute,
    profile: this.profileRoute,
    search: this.searchRoute,
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