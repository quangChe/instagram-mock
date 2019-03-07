import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { Constants } from 'expo';

import FeedScreen from './screens/FeedScreen';

export default class App extends React.Component {
  state = {
    items: [
      {id: 11, author: 'Quang Che'},
      {id: 12, author: 'Robert Nguyen'},
      {id: 13, author: 'Forest Whitaker'}
    ]
  }
  render() {
    return (
      <View style={styles.container}>
        <FeedScreen style={styles.feed}></FeedScreen>
      </View>
    );
  }
}

const platformVersion = Platform.OS
  ? parseInt(Platform.Version, 10)
  : Platform.Version;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  feed: {
    flex: 1,
    marginTop: Platform.OS === 'android' || platformVersion < 11
      ? Constants.statusBarHeight
      : 0,
  }
});
