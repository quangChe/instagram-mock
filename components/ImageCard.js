import React from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet, View, ActivityIndicator, TouchableOpacity } from 'react-native';

import ImageHeader from './ImageHeader';
import ImageFooter from './ImageFooter';

export default class ImageCard extends React.Component {
  static propTypes = {
    fullName: PropTypes.string.isRequired,
    image: Image.propTypes.source.isRequired,
    onPressOptions: PropTypes.func.isRequired,
    onPressComments: PropTypes.func.isRequired,
  };

  static defaultProps = {
    onPressOptions: () => {},
    onPressComments: () => {},
  };

  state = {
    loading: true,
    itemLiked: false,
    likeAnimation: false,
    lastPress: 0,
  }

  handleLoading = () => {
    this.setState({loading: false});
  }

  buttonLike = () => {
    this.setState({itemLiked: !this.state.itemLiked});
  }

  tapLike = () => {
    const firstPress = new Date().getTime() - this.state.lastPress;
    return (firstPress < 300) 
      ? this.setState({likeAnimation: true, itemLiked: true}, 
          () => setTimeout(() => this.setState({likeAnimation: false}), 800)) 
      : this.setState({lastPress: new Date().getTime()});
  }

  render() {
    const { fullName, image, onPressComments, onPressOptions } = this.props;
    const { loading, itemLiked, likeAnimation } = this.state;

    return (
      <View style={styles.container}>
        <ImageHeader 
          fullName={fullName}
          onPressOptions={onPressOptions}/>
        <View style={styles.image}>
          {loading && (
            <ActivityIndicator
              style={StyleSheet.absoluteFill}
              size="large"/>
          )}
          <TouchableOpacity
            activeOpacity={1}
            style={StyleSheet.absoluteFill}
            onPress={this.tapLike}>
            <Image 
              style={{aspectRatio: 1}} 
              source={image}
              onLoad={this.handleLoading}/>
          </TouchableOpacity>
          {likeAnimation && (
            <View style={styles.likeAnimation}>
              <Image 
                style={styles.bigHeart}
                source={require('../assets/big-heart.png')}/>
            </View>
          )}
        </View>
        <ImageFooter
          itemLiked={itemLiked}
          likeClick={this.buttonLike}
          commentClick={onPressComments}
          author={fullName}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
  },
  image: {
    aspectRatio: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.02)',
  },
  likeAnimation: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigHeart: {
    width: 100,
    resizeMode: 'contain',
  }
})