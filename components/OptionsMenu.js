import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableOpacity, 
  TouchableHighlight, View, Text} from 'react-native';

const OptionsMenu = ({toggleOptions}) => {
  return (
    <TouchableOpacity 
      style={[styles.optionMenu,
              StyleSheet.absoluteFill]}
      onPress={toggleOptions}
      activeOpacity={1}>
      <View style={styles.menuBox}>
        <TouchableHighlight
          activeOpacity={0.7}
          underlayColor="#e0e0e0"
          onPress={() => console.log('Message!')}
          style={[styles.menuItem, styles.touchBorder, styles.borderBottom]}>
          <Text style={styles.menuText}>Message User</Text>
          </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.7}
          underlayColor="#e0e0e0"
          onPress={() => console.log('Share!')}
          style={[styles.menuItem, styles.borderBottom]}>
          <Text style={styles.menuText}>Share Item</Text>
        </TouchableHighlight>
        <TouchableHighlight
          activeOpacity={0.7}
          underlayColor="#e0e0e0"
          onPress={() => console.log('Flag!')}
          style={[styles.menuItem, styles.touchBorder]}>
          <Text style={styles.menuTextWarn}>Flag User</Text>
        </TouchableHighlight>
      </View>
    </TouchableOpacity>
  )
}

OptionsMenu.propTypes = {
  toggleOptions: PropTypes.func,
}

export default OptionsMenu;

const styles = StyleSheet.create({
  optionMenu: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuBox: {
    backgroundColor: '#f0f0f0',
    width: '80%',
    height: '60%',
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
  