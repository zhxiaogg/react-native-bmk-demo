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
  View,
  Image
} from 'react-native';

const resolveAssetSource = require('react-native/Libraries/Image/resolveAssetSource');

import {BMKMapView, BMKLocationService, BMKMapManager} from 'react-native-bmk'

new BMKMapManager().initialize('Iq3K32micmLiXv4kwnSma6ILRkpIBtt4');

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

  onAnnotationSelected({nativeEvent}) {
    console.log(nativeEvent);
  }

  onRegionChange({nativeEvent}) {
    console.log(nativeEvent);
    const {center} = nativeEvent;
    this.setState({center: center});
  }

  componentWillUnmount() {
    this.locator.stopUserLocationService();
  }

  onClickPoi({nativeEvent}) {
    console.log(nativeEvent);
  }

  render() {
    const {location, center} = this.state;
    const annotations = [{
      title: 'center of map',
      identifier: '',
      coordinate: center,
      image: resolveAssetSource(require('./assets/pin.png')),
    }];

    const mapOptions = {
      showMapPoi: true,
      showsUserLocation: true,
      userLocation: location,
      annotations: annotations,
    };
    return (
      <View style={styles.container}>
        <BMKMapView style={styles.map}
          onDidSelectAnnotationView={this.onAnnotationSelected.bind(this)}
          onRegionDidChange={this.onRegionChange.bind(this)} {...mapOptions}/>
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
