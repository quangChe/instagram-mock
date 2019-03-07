import React from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet, View, ActivityIndicator } from 'react-native';

import ImageHeader from './ImageHeader';
import OptionsMenu from './OptionsMenu';

export default class ImageCard extends React.Component {
  static propTypes = {
    fullName: PropTypes.string.isRequired,
    image: Image.propTypes.source.isRequired,
    onPressOptions: PropTypes.func,
  };

  static defaultProps = {
    linkText: '',
    onPressOptions: () => {},
  };

  state = {
    loading: true,
    options: false,
  }

  handleLoading = () => {
    this.setState({loading: false});
  }

  toggleOptions = () => {
    this.setState({options: !this.state.options});
  }

  render() {
    const { fullName, image } = this.props;
    const { loading, options } = this.state;

    return (
      <View style={styles.container}>
        <ImageHeader 
          fullName={fullName}
          onPressOptions={this.toggleOptions}/>
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
          {options && (
            <OptionsMenu toggleOptions={this.toggleOptions}/>
          )}
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
  },
})