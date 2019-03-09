import React from 'react';
import { 
  StyleSheet, 
  View, 
  Platform, 
  Modal,
  AsyncStorage,
  } from 'react-native';
import { Constants } from 'expo';

import FeedScreen from './screens/FeedScreen';
import CommentScreen from './screens/CommentScreen';
import OptionScreen from './screens/OptionScreen';

const ASYNC_STORAGE_COMMENTS_KEY = 'ASYNC_STORAGE_COMMENTS_KEY';

export default class App extends React.Component {
  state = {
    modalOpen: false,
    selectedItemId: null,
    commentsForItem: {},
  }

  async componentDidMount() {
    try {
      const commentsForItem = await AsyncStorage.getItem(ASYNC_STORAGE_COMMENTS_KEY);
      this.setState({commentsForItem: commentsForItem 
        ? JSON.parse(commentsForItem) : {}});
    } catch(err) {
      console.log('Failed to load comments...');
    }
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

  closeAllModals = msg => {
    if (msg) console.log(msg);

    return this.setState({
      modalOpen: null,
      selectedItemId: null,
    })
  };

  onSubmitComment = async text => {
    const { selectedItemId, commentsForItem } = this.state;
    const comments = commentsForItem[selectedItemId] || [];
    const updated = {...commentsForItem, [selectedItemId]: [...comments, text]};

    this.setState({commentsForItem: updated});

    try {
      await AsyncStorage.setItem(ASYNC_STORAGE_COMMENTS_KEY, JSON.stringify(updated));
    } catch (err) {
      console.log(`Failed to save comment: ${text} for ${selectedId}.`)
    }
  }

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
            onSubmitComment={this.onSubmitComment}/>
        </Modal>

        <Modal
          visible={modalOpen === 'options'}
          transparent={true}
          onRequestClose={this.closeAllModals}>
            <OptionScreen
              closeOptions={this.closeAllModals}/>
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
