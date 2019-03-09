import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, TouchableOpacity, 
  TouchableHighlight, View, Text,
} from 'react-native';

const OptionScreen = ({closeOptions}) => {
  return (
    <TouchableOpacity 
      style={[styles.container,
              StyleSheet.absoluteFill]}
      onPress={closeOptions}
      activeOpacity={1}>
      <View style={styles.menuBox}>
        <TouchableHighlight
          activeOpacity={0.7}
          underlayColor="#e0e0e0"
          onPress={() => closeOptions('Message')}
          style={[styles.menuItem, styles.touchBorder, styles.borderBottom]}>
          <Text style={styles.menuText}>Message User</Text>
          </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.7}
          underlayColor="#e0e0e0"
          onPress={() => closeOptions('Share')}
          style={[styles.menuItem, styles.borderBottom]}>
          <Text style={styles.menuText}>Share Item</Text>
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.7}
          underlayColor="#e0e0e0"
          onPress={() => closeOptions('Flag')}
          style={[styles.menuItem, styles.touchBorder]}>
          <Text style={styles.menuTextWarn}>Flag User</Text>
        </TouchableHighlight>
      </View>
    </TouchableOpacity>
  )
}

OptionScreen.propTypes = {
  closeOptions: PropTypes.func,
}

export default OptionScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuBox: {
    backgroundColor: '#f0f0f0',
    width: '90%',
    height: 200,
    borderRadius: 10,
    alignItems: 'center',
    overflow: 'hidden',
  },
  menuItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuText: {
    color: '#0090ff',
    fontSize: 20,
  },
  menuTextWarn: {
    color: 'red',
    fontSize: 20,
  }
})
  