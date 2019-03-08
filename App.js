import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { Constants } from 'expo';

import FeedScreen from './screens/FeedScreen';
import CommentList from './components/CommentList';

export default class App extends React.Component {
  state = {
    comments: [
      'Wow', 'This is great!', 'Beautiful image!'
    ]
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <FeedScreen style={styles.feed}/> */}
        <CommentList
          items={this.state.comments}
        />
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
    marginTop: Platform.OS === 'android' || platformVersion < 11
      ? Constants.statusBarHeight
      : 30,
  },
  feed: {
    flex: 1,
  }
});
