import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import Avatar from './Avatar';
import getAvatarColor from '../utils/getAvatarColor';
import getInitials from '../utils/getInitials';

const ImageHeader = ({fullName, linkText, onPressLinkText}) => {
  return (
    <View style={styles.container}>
      <Avatar
        size={50}
        initials={getInitials(fullName)}
        backgroundColor={getAvatarColor(fullName)}/>
      <Text style={styles.text} numberOfLines={1}>
        {fullName}
      </Text>
      {!!linkText && (
        <TouchableOpacity onPress={onPressLinkText}>
          <Text 
            numberOfLines={1} 
            style={styles.touchable}>{linkText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

ImageHeader.propTypes = {
  fullName: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  onPressLinkText: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  text: {
    flex: 1,
    marginHorizontal: 8,
    fontWeight: '500',    
  },
  touchable: {
    fontWeight: '500',
  }
});


export default ImageHeader;