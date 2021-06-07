import React, {useState} from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const ImagePicker = ({route, navigation}) => {
  const [imageUri, setImageUri] = useState(null);
  const selectImage = () => {
    let options = {
      title: 'You can choose one image',
      maxWidth: 256,
      maxHeight: 256,
      storageOptions: {
        skipBackup: true,
      },
    };
    launchImageLibrary(options, Response => {
      if (Response.didCancel) {
        Alert.alert('user cancelled');
      } else if (Response.errorMesssage) {
        Alert.alert(Response.errorMesssage);
      } else if (Response.assets) {
        let object = Response.assets[0];
        // console.log('assets:', Object);
        const uriLink = object.uri;
        // console.log('assets:', uri);
        const uriobject = {uri: uriLink};
        setImageUri(uriobject);
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title={'uploadImage'} onPress={selectImage} />

      <Text>{'name:' + route.params.name}</Text>
      <Text>{'company:' + route.params.company}</Text>
      <View style={{width: 300, height: 300, padding: 25}}>
        <Image style={{width: 250, height: 250}} source={imageUri} />
      </View>
    </SafeAreaView>
  );
};
export default ImagePicker;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
