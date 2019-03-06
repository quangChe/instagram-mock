import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo';

import Avatar from './components/Avatar';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Avatar
          initials="FL"
          size={55}
          backgroundColor={'#d68039'}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    paddingHorizontal: 15,
    paddingTop: Constants.statusBarHeight,
  },
});
