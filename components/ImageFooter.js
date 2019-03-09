import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import randomSentence from 'random-sentence';

export default class ImageFooter extends React.Component {
  
  static propTypes = {
    itemLiked: PropTypes.bool.isRequired,
    likeClick: PropTypes.func.isRequired,
    commentClick: PropTypes.func.isRequired,
    author: PropTypes.string.isRequired,
  }

  state = {
    itemLiked: this.props.itemLiked,
    itemCaption: randomSentence({min: 5, max: 15}),
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({
      itemLiked: nextProps.itemLiked
    })
  }

  handleLike = () => {
    const {likeClick} = this.props;
    this.setState({itemLiked: !this.state.itemLiked});
    likeClick(this.state.itemLiked);
  }

  render() {
    const { itemLiked, itemCaption } = this.state;
    const { commentClick, author } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={this.handleLike}>
            { itemLiked
              ? <Image 
                  style={styles.touchable}
                  source={require('../assets/heart-filled.png')}/>
              : <Image 
                  style={styles.touchable}
                  source={require('../assets/heart-empty.png')}/>
            }
          </TouchableOpacity>
          <TouchableOpacity
            onPress={commentClick}>
            <Image 
              style={styles.touchable}
              source={require('../assets/comment-bubble.png')}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.authorContainer}>
          <Text>
            <Text style={styles.name}>{author.replace(/ /g, '')}: </Text>
            {itemCaption}
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  authorContainer: {
    marginTop: 5,
    paddingHorizontal: 10,
  },
  name: {
    fontWeight: '500',
  },
  buttonContainer: {
    marginVertical: 10,
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 5,
  },
  touchable: {
    width: 24,
    height: 24,
    backgroundColor: 'transparent',
    marginHorizontal: 8,
  }
})