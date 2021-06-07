import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Pressable} from 'react-native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const welcome = ({navigation}) => {

    const loginClicked = () => {
        navigation.navigate('LOGIN');
    }
    const signClicked = () => {
        navigation.navigate('SIGNUP');
       }
       
  const emsClicked = () => {
    navigation.navigate('EMS');
  };

    return(
    <SafeAreaView style={styles.container}>
      <Text style={{width:650, height:100, fontSize:26, padding:10}}>WWater</Text>
      <View style = {{padding:20}}>
      <Text style={styles.title}>
        Water delivery
      </Text>
      <Text style={styles.subtitle}>
        We deliver Water at any point of the Earth in 30 minutes
      </Text>
      <Pressable onPress={emsClicked}>
      <View style= {{height:50,width:350 ,justifyContent:'center',borderWidth:1,borderColor:'grey' ,alignItems:'center', borderRadius:8, marginTop:50}}>
        <Text style={{fontSize:18, fontWeight:'bold'}}>EMS List</Text>
      </View>
      </Pressable>

      <Pressable onPress={loginClicked}>
      <View style= {{height:50 ,justifyContent:'center',backgroundColor:'grey',borderColor:'grey',borderWidth:1 ,alignItems:'center', borderRadius:8, marginTop:15}}>
        <Text style={{fontSize:18, fontWeight:'bold', color:'white'}}>Log in</Text>
      </View>
      </Pressable>
      <Pressable onPress={signClicked}>
      <View style= {{height:50 ,justifyContent:'center',borderWidth:1,borderColor:'grey' ,alignItems:'center', borderRadius:8, marginTop:15}}>
        <Text style={{fontSize:18, fontWeight:'bold'}}>Sign up</Text>
      </View>
      </Pressable>

      </View>
    </SafeAreaView>
  );
}
export default welcome;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'column-reverse',
      justifyContent:'flex-start',  
      alignItems:'center'
    },
  
    title: {
      textAlign: 'left',
      fontSize: 30,
      fontWeight:'bold',
      color:'black',
      marginBottom:10,
    },
    subtitle:{
      fontSize:18,
      fontWeight:'200',
      color:'grey',
    },
  });