import React from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet, View, ActivityIndicator } from 'react-native';

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

  state = {
    loading: true,
  }

  handleLoading = () => {
    this.setState({loading: false});
  }

  render() {
    const { fullName, image, onPressLinkText } = this.props;
    const { loading } = this.state;

    return (
      <View style={styles.container}>
        <ImageHeader 
          fullName={fullName}
          onPressLinkText={onPressLinkText}/>
        <View style={styles.image}>
          {loading && (
            <ActivityIndicator
              style={StyleSheet.absoluteFill}
              size="large"/>
          )}
          <Image 
            style={StyleSheet.absoluteFill} 
            source={image}
            onLoad={this.handleLoading}/>
        </View>
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
  }
})