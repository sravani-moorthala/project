import React from 'react';
import {useLayoutEffect} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
} from 'react-native';

const EmsScreen = ({navigation}) => {
  return <SafeAreaView style={StyleSheet.rootStyle}></SafeAreaView>;
};

export default EmsScreen;

const styles = StyleSheet.create({
  rootStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
