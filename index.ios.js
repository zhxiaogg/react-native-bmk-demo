/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import BMKMapView from 'react-native-bmk'

export default class mapo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BMKMapView style={styles.map}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 0,
  },
  map: {
    flex: 1
  },
});

AppRegistry.registerComponent('mapo', () => mapo);
