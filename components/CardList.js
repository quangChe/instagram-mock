import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';

import { getImageFromId } from '../utils/api';
import ImageCard from './ImageCard';

const keyExtractor = ({id}) => id.toString();

export default class CardList extends React.Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        author: PropTypes.string.isRequired,
      })
    ).isRequired,
    onPressComments: PropTypes.func.isRequired,
    onPressOptions: PropTypes.func.isRequired,
  };

  renderItem = ({item: {id, author}}) => {
    const { onPressComments, onPressOptions } = this.props;

    return (
      <ImageCard
        fullName={author}
        image={{uri: getImageFromId(id)}}
        onPressComments={() => onPressComments(id)}
        onPressOptions={() => onPressOptions()}
        />
    )
  }
  

  render() {
    const { items } = this.props;

    return (
      <FlatList
        data={items}
        renderItem={this.renderItem}
        keyExtractor={keyExtractor}/>
    )
  }
}