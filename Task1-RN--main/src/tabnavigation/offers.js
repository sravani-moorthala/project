import React, {useState} from 'react';
import {StyleSheet, Button, Text, View, DatePicker, Time} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const offers = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    //  console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const Confirm = time => {
    //  console.warn('A time has been picked: ', time);
    hideTimePicker();
  };

  return (
    <View style={styles.container}>
      <Text>Press here for Date</Text>
      <Button title="Show Date Picker" onPress={showDatePicker} />
      <Text>Press here for Time</Text>
      <Button title="Show Time Picker" onPress={showTimePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        locale="en_GB"
        date={new Date()}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        locale="en_GB"
        //time={new Time()}
        onConfirm={Confirm}
        onCancel={hideTimePicker}
      />
    </View>
  );
};
export default offers;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
