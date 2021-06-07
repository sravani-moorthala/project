import React from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
 
const forget = ({navigation}) => {

    const backClicked = () => {
        navigation.goBack('login');
      }

    return(
        <View style={StyleSheet.container}>
           <View style={{padding:20, width:'100%'}}>
        <Pressable onPress={backClicked}>
          <Image style={{width:20,height:20}}
          source={require('./assets/left-arrow.png')}
          />
        </Pressable>
       
            <Text>
             Create Password 
            </Text>
        </View>
</View>
    );
}
export default forget;

const style = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
})