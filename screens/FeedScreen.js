import React from 'react';
import PropTypes from 'prop-types';
import {
  ActivityIndicator,
  Text,
  ViewPropTypes,
  SafeAreaView
} from 'react-native';

import { fetchImages } from '../utils/api';
import CardList from '../components/CardList';

export default class FeedScreen extends React.Component {
  static propTypes = {
    style: ViewPropTypes.style,
    onPressComments: PropTypes.func.isRequired,
    onPressOptions: PropTypes.func.isRequired,
  }

  static defaultProps = {
    style: null,
  }

  state = {
    loading: true,
    error: false,
    items: [],
  }

  async componentDidMount() {
    try {
      const items = await fetchImages();
      this.setState({
        loading: false,
        items
      });
    } catch (err) {
      this.setState({
        loading: false,
        error: true,
      })
    }
  }

  render() {
    const { onPressComments, onPressOptions, style } = this.props;
    const { loading, error, items } = this.state;

    if (loading) return <ActivityIndicator size="large"/>
    if (error) return <Text>Error...</Text>

    return (
      <SafeAreaView style={style}>
        <CardList 
          onPressComments={onPressComments}
          onPressOptions={onPressOptions}
          items={items}/>
      </SafeAreaView>
    )
  }
}