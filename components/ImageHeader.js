import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import Avatar from './Avatar';
import getAvatarColor from '../utils/getAvatarColor';
import getInitials from '../utils/getInitials';

const ImageHeader = ({fullName, onPressOptions}) => {
  return (
    <View style={styles.container}>
      <Avatar
        size={50}
        initials={getInitials(fullName)}
        backgroundColor={getAvatarColor(fullName)}/>
      <Text style={styles.text} numberOfLines={1}>
        {fullName}
      </Text>
      <TouchableOpacity style={styles.optionBtn} onPress={onPressOptions}>
        <Image 
          style={styles.optionIcon}
          source={require('../assets/options-button.png')}></Image>
      </TouchableOpacity>
    </View>
  );
};

ImageHeader.propTypes = {
  fullName: PropTypes.string.isRequired,
  onPressOptions: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 8,
    marginBottom: 5,
  },
  text: {
    flex: 1,
    marginHorizontal: 8,
    fontWeight: '500',    
  },
  optionBtn: {
    padding: 16,
    paddingRight: 8,
  },
  optionIcon: {
    width: 24,
    height: 24,
    backgroundColor: 'transparent',
  }
});


export default ImageHeader;