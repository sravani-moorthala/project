import React, {useState, component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Pressable,TextInput, Image, Alert} from 'react-native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const login = ({navigation}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const backClicked = () => {
    navigation.goBack();
  }

  const forgetClicked = () => {
    navigation.navigate('FORGET');
  }

  const signupClicked = () => {
    navigation.navigate('SIGNUP');
  };
  
const loginClicked = () => {
  Alert.alert('invalid details')
  Alert.alert('Email',email);
  Alert.alert('Password',password);
 }

  return(
    <SafeAreaView styles={styles.container}>
      <View style={{padding:20, width:'100%'}}>
        <Pressable onPress={backClicked}>
          <Image style={{width:20,height:20}}
          source={require('./assets/left-arrow.png')}
          />
        </Pressable>
      <Text style={styles.subTxt}>Welcome Back</Text>
       <View style={styles.SectionStyle}>
          <Image style={styles.ImageStyle}
          source={require('./assets/email.png')}
          />
        <TextInput
          style={styles.input}
          placeholder={'water@gmail.com'}
          editable={true}
          onChangeText={text => setEmail(text)}
          //value={'email'}
        />
        </View>
        <View style={styles.SectionStyle}>
          <Image style={styles.ImageStyle}
          source={require('./assets/padlock.png')}
          />
        <TextInput
          style={styles.input}
          placeholder={'Password'}
          editable={true}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          //value={'password'}
        />
        </View>
        <Pressable onPress={forgetClicked}>
          <View style = {{height:20}}>
           <Text style={styles.title}>Forgot password?</Text>
        </View>
        </Pressable>

    
        <Pressable onPress={loginClicked}>
      <View style= {{height:50,width:350 ,justifyContent:'center',backgroundColor:'grey',borderColor:'grey',borderWidth:1 ,alignItems:'center', borderRadius:8, marginTop:60}}>
        <Text style={{fontSize:18, fontWeight:'bold', color:'white'}}>Log in</Text>
      </View>
      </Pressable>

      <View style={{width:350, height:20, flexDirection:'row',marginTop:15, alignItems:'center', justifyContent:'center' }}>
        <View style={{height:1, width:160, backgroundColor:'black', justifyContent:'space-around'}}></View>
        <Text> Or </Text>
        <View style={{height:1, width:160, backgroundColor:'black'}}></View>
      </View>

      <Pressable onPress={signupClicked}>
      <View style= {{height:50,width:350 ,justifyContent:'center',borderWidth:1,borderColor:'grey' ,alignItems:'center', borderRadius:8, marginTop:20}}>
        <Text style={{fontSize:18, fontWeight:'bold'}}>Sign up</Text>
      </View>
      </Pressable>

      </View>
    </SafeAreaView>

  );
}
export default login;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    //justifyContent:'center',
    //alignItems:'center'
  },  
  
  input: {
    height: 50,
    width: 310,
    borderBottomWidth: 1,
    marginLeft: 1,
    marginTop: 1,
    marginRight:20,
    
  },
  title: {
    textAlign: 'right',
    fontSize: 18,
    height: 40,
    color: 'blue',
    marginRight: 10,
    marginTop:5
  },

  subTxt: {
    marginTop: 150,
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10,
    height: 200,
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    margin: 10
},
ImageStyle: {
    height: 15,
    width: 15,
    marginTop:18,
},

})
