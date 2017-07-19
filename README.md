# react-native-bmk demo

![demo.gif](./assets/demo.gif)

## Usage (for react-native-bmk)

### step 1. install npm package

```
npm install react-native-bmk --save
```
### step 2. add baidu map sdk to the .xcodeproj

see [configure sdk](http://lbsyun.baidu.com/index.php?title=iossdk/guide/buildproject)

### step 3. setup baidu map sdk before app starts

see [set up map manager](http://lbsyun.baidu.com/index.php?title=iossdk/guide/hellobaidumap)

### step 4. create your react native view
in your 'index.ios.js' file:
```jsx
import BMKMapView from 'react-native-bmk'

render() {
  return (
      <View style={styles.container}>
        <BMKMapView style={styles.map} />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 0,
  },
  map: {
    flex: 1,
  },
});
```
