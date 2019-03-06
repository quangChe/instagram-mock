import React from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet, View } from 'react-native';

import ImageHeader from './ImageHeader';

export default class ImageCard extends React.Component {
  static propTypes = {
    fullName: PropTypes.string.isRequired,
    image: Image.propTypes.source.isRequired,
    onPressLinkText: PropTypes.func,
  };

  static defaultProps = {
    linkText: '',
    onPressLinkText: () => {},
  };

  render() {
    const { fullName, image, onPressLinkText } = this.props;

    return (
      <View>
        <ImageHeader 
          fullName={fullName}
          onPressLinkText={onPressLinkText}/>
        <Image style={styles.image} source={image}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.02)',
  }
})