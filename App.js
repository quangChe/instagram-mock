import React from 'react';
import { StyleSheet, View, Platform, Modal } from 'react-native';
import { Constants } from 'expo';

import FeedScreen from './screens/FeedScreen';
import CommentScreen from './screens/CommentScreen';

export default class App extends React.Component {
  state = {
    modalOpen: false,
    selectedItemId: null,
    commentsForItem: {},
  }

  openOptionScreen = () => {
    this.setState({
      modalOpen: 'options',
    })
  }

  openCommentScreen = id => {
    this.setState({
      modalOpen: 'comments',
      selectedItemId: id,
    });
  };

  closeAllModals = () => {
    this.setState({
      modalOpen: null,
      selectedItemId: null,
    })
  };

  render() {
    const { commentsForItem, modalOpen, selectedItemId } = this.state;

    return (
      <View style={styles.container}>
        <FeedScreen 
          style={styles.feed}
          onPressComments={this.openCommentScreen}
          onPressOptions={this.openOptionScreen}/>

        <Modal
          visible={modalOpen === 'comments'}
          animationType="slide"
          onRequestClose={this.closeAllModals}>
          <CommentScreen
            onSubmit
            style={styles.container}
            comments={commentsForItem[selectedItemId] || []}
            onClose={this.closeAllModals}
            />
        </Modal>

        <Modal
          visible={modalOpen === 'options'}
          animationType="slide"
          onRequestClose={this.closeAllModals}>
          // Options Menu
        </Modal>
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
