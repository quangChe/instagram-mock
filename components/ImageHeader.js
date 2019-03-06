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

const ImageHeader = ({fullName, onPressLinkText}) => {
  return (
    <View style={styles.container}>
      <Avatar
        size={50}
        initials={getInitials(fullName)}
        backgroundColor={getAvatarColor(fullName)}/>
      <Text style={styles.text} numberOfLines={1}>
        {fullName}
      </Text>
      <TouchableOpacity onPress={onPressLinkText}>
        <Image 
          style={styles.touchable}
          source={require('../assets/comment-bubble.png')}></Image>
      </TouchableOpacity>
    </View>
  );
};

ImageHeader.propTypes = {
  fullName: PropTypes.string.isRequired,
  onPressLinkText: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 20,
    marginBottom: 5,
  },
  text: {
    flex: 1,
    marginHorizontal: 8,
    fontWeight: '500',    
  },
  touchable: {
    width: 20,
    height: 20,
    backgroundColor: 'rgba(0, 0, 0, 0)',
  }
});


export default ImageHeader;