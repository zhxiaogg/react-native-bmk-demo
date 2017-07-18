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

import {BMKMapView, BMKLocationService} from 'react-native-bmk'

export default class mapo extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.locator = new BMKLocationService({
      didUpdateBMKUserLocation: (location) => {this.onLocation(location);}
    });
    this.locator.startUserLocationService();
  }

  onLocation(location) {
    this.setState({location: location});
  }

  componentWillUnmount() {
    this.locator.stopUserLocationService();
  }

  render() {
    const {location} = this.state;
    const mapOptions = {
      showMapPoi: true,
      showsUserLocation: true,
      userLocation: location
    };
    return (
      <View style={styles.container}>
        <BMKMapView style={styles.map} {...mapOptions}/>
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
