import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo';

import ImageHeader from './components/ImageHeader';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageHeader 
          fullName={'Quang Che'}
          linkText={'View Comments'}
          onPressLinkText={() => console.log('Press!')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
  },
});
