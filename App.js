import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Constants } from 'expo';

import ImageCard from './components/ImageCard';
import {getImageFromId} from './utils/api';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageCard
          fullName={'Quang Che'}
          image={{uri: getImageFromId(11)}}
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
