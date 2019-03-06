import { ColorPropType, StyleSheet, Text, View, Platform } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

const Avatar = ({size, backgroundColor, initials}) => {
  const style = {
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor
  }

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.initials}>{initials}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  initials: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 18,
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'monospace',
  }
})

Avatar.propTypes = {
  size: PropTypes.number.isRequired,
  backgroundColor: ColorPropType.isRequired,
  initials: PropTypes.string.isRequired
}

export default Avatar;