import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default class CommentList extends React.Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  renderItem = (item) => {
    return (
      <View key={this.props.items.indexOf(item)} style={styles.itemContainer}>
        <Text>
          <Text style={styles.name}>You: </Text>
          {item}
        </Text>
      </View>
    )
  }
    ;
  render() {
    const {items} = this.props;
    return (
      <ScrollView style={styles.container}>
        {items.map(this.renderItem)}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  name: {
    fontWeight: '500',
  },
  itemContainer: {
    paddingVertical: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#e0e0e0'
  }
})