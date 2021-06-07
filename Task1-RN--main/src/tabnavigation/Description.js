import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const description = () => {
  return (
    <SafeAreaView style={styles.container}>
      
      <Text>
        Safety Exterior Interior Fuel {'\n'}
        Performance {'\n'}Comfort Convenience {'\n'}Dimensions{'\n'}Capacity{' '}
        {'\n'}
        Engine Transmission Entertainment{'\n'} Communication Suspension
        Steering{'\n'} Brakes
      </Text>
    </SafeAreaView>
  );
};
export default description;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
