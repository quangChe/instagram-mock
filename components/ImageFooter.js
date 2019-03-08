import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Image, TouchableOpacity } from 'react-native';

export default class ImageFooter extends React.Component {
  
  static propTypes = {
    itemLiked: PropTypes.bool.isRequired,
    likeClick: PropTypes.func.isRequired,
  }

  state = {
    itemLiked: this.props.itemLiked
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
    const {itemLiked} = this.state;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => console.log('Comment screen.')}>
          <Image 
            style={styles.touchable}
            source={require('../assets/comment-bubble.png')}></Image>
        </TouchableOpacity>
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
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
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