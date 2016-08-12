/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, NavigatorIOS } from 'react-native';
import AnotherPage from './AnotherPage.js';

<NavigatorIOS
   initialRoute={{
     component: HelloWorld,
     title: 'Some hello world messages',
   }}
   style={styles.mainContainer}
 />

class HelloWorld extends Component {
  render() {
    return (
      <View style={styles.mainText}>
        <Text style={styles.mainTitle}>
          {"\n"}Hello World!
        </Text>
        <Text style={styles.subtitle}>
          How are you doing?
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    mainText: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    mainTitle: {
      color: 'blue',
    },
    subtitle: {
      color: 'purple',
    }
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
