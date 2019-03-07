import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Constants } from 'expo';

import CardList from './components/CardList';

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
        <CardList items={this.state.items}/>
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
