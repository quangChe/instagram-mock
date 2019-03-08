import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, ViewPropTypes} from 'react-native';

import CommentInput from '../components/CommentInput';
import CommentList from '../components/CommentList';
import NavigationBar from '../components/NavigationBar';

const CommentScreen = ({ style, comments, onClose, onSubmitComment }) => (
  <SafeAreaView style={style}>
    <NavigationBar
      title="Testing 1 2 3"
      leftText="Back"
      onPressLeftText={onClose}/>
    <CommentList
      items={comments}/>
    <CommentInput
      placeholder="Post new comment"
      onSubmit={onSubmitComment}/>
  </SafeAreaView>
)

CommentScreen.propTypes = {
  style: ViewPropTypes.style,
  comments: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmitComment: PropTypes.func,
}

CommentScreen.defaultProps = {
  style: null
}

export default CommentScreen;