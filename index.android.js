'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  View
} from 'react-native';
import NativeToastAndroid from './NativeToastAndroid';

export default class reactNativeAndroidWearDemo extends Component {
  componentDidMount() {
    NativeToastAndroid.registerLoggingCallback(() => {
      console.log('error');
    }, (message) => {
      console.log(`Message: "${message}"`);
    });
  }

  onPress() {
    NativeToastAndroid.show('This is a native toast!', NativeToastAndroid.SHORT);
  }

  sendMessageToWear() {
  	NativeToastAndroid.sendMessageToWear("ASI team!!!")
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.onPress}
          title="Display Native Toast"
        />
        <Button
          onPress={this.sendMessageToWear}
          title="Who runs the world?"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('reactNativeAndroidWearDemo', () => reactNativeAndroidWearDemo);
