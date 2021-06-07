import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const stock = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Stock Screen</Text>
    </SafeAreaView>
  );
};
export default stock;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
