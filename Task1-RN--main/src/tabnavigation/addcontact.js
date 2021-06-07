import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const addcontact = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>addcontact Screen</Text>
    </SafeAreaView>
  );
};
export default addcontact;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
