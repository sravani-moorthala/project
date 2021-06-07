import React, {useEffect, useState} from 'react';
import {Alert, SafeAreaView, StyleSheet, Text} from 'react-native';
import GetLocation from 'react-native-get-location';

const tracker = () => {
  const [latitude, setlatitude] = useState('');
  const [longitude, setlongitude] = useState('');

  useEffect(() => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        console.log('location:', location);
        setlatitude(location.latitude);
        setlongitude(location.longitude);
      })
      .catch(error => {
        const {code, message} = error;

        /*  if (code == 'CANCELLED') {
          Alert.alert('cancelled by user');
        } else if (code == 'UNAVAILABLE') {
          Alert.alert('unavailable by user');
        } else if (code == 'TIMEOUT') {
          Alert.alert('timeout by user');
        } else if (code == 'UNAUTHORIZED') {
          Alert.alert('unauthorized by user');
        }
*/
        console.warn(code, message);
      });
  });
  return (
    <SafeAreaView style={styles.container}>
      <Text>Tracker Screen</Text>
      <Text>please wait for 5sec to display</Text>
      <Text> </Text>
      <Text>{'latitude:' + latitude} </Text>
      <Text>{'longitude:' + longitude}</Text>
    </SafeAreaView>
  );
};
export default tracker;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
