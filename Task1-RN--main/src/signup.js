import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, TextInput,Pressable, Image} from 'react-native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const signup = ({navigation}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");


  
  const backClicked = () => {
    navigation.goBack();
  }

  const loginClicked = () => {
    navigation.goBack('WELCOME')
  }
    const signupClicked = () => {
      console.log('Email',email);
  console.log('Password',password);
  console.log('name',name);
    };
    return(
        <SafeAreaView style={styles.container}>
          <View style={{padding:20, width:'100%'}}>
        <Pressable onPress={backClicked}>
          <Image style={{width:20,height:20}}
          source={require('./assets/left-arrow.png')}
          />
        </Pressable>

            <Text style={styles.headerTxt}>Create Account</Text>

            <View style={styles.subView}>
            <View style={styles.SectionStyle}>
          <Image style={styles.ImageStyle}
          source={require('./assets/user.png')}
          />
              <TextInput
                style={styles.input}
                placeholder='Name'
                editable={true}
                onChangeText={text => setName(text)}
              />
              </View>
              <View style={styles.SectionStyle}>
          <Image style={styles.ImageStyle}
          source={require('./assets/email.png')}
          />
              <TextInput
                style={styles.input}
                placeholder='Email'
                editable={true}
                onChangeText={text => setEmail(text)}
              />
              </View>
              <View style={styles.SectionStyle}>
          <Image style={styles.ImageStyle}
          source={require('./assets/padlock.png')}
          />
              <TextInput
                style={styles.input}
                placeholder='Password'
                editable={true}
                secureTextEntry={true}
                onChangeText={text => setPassword(text)}
              />
              </View>

<Pressable onPress={signupClicked}>
      <View style= {{height:50 ,width:350,justifyContent:'center',backgroundColor:'grey',borderColor:'grey',borderWidth:1 ,alignItems:'center', borderRadius:8, marginTop:40, marginLeft:10,marginRight:20}}>
        <Text style={{fontSize:18, fontWeight:'bold', color:'black'}}>Sign up</Text>
      </View>
      </Pressable>

      <View style={{width:350, height:20, flexDirection:'row',marginTop:15, alignItems:'center', justifyContent:'center' }}>
        <View style={{height:1, width:160, backgroundColor:'black', justifyContent:'space-around'}}></View>
        <Text> Or </Text>
        <View style={{height:1, width:160, backgroundColor:'black'}}></View>
      </View>


      <Pressable onPress={loginClicked}>
      <View style= {{height:50,width:350,justifyContent:'center',borderWidth:1,borderColor:'grey' ,alignItems:'center', borderRadius:8, marginTop:15, marginRight:20, marginLeft:10}}>
        <Text style={{fontSize:18, fontWeight:'bold'}}>Log in</Text>
      </View>
      </Pressable>
              </View>
</View>
            </SafeAreaView>

    );
}
export default signup;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'column',
        
    },
    headerTxt: {
        fontSize: 30,
        marginLeft: 20,
        fontWeight: 'bold',
        color: 'black',
        position: 'absolute',
        marginTop: 200,
        alignItems:'flex-start',
        height:200,
      },
      subView: {
        marginTop: 350,
      },
      input: {
        height: 50,
        width: 320,
        borderBottomWidth: 1,
        marginTop: 1,
        marginRight:10,
      },
 
      subTxt: {
    marginTop: 150,
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    margin: 10
},
ImageStyle: {
    height: 15,
    width: 15,
    marginTop:20,
},   
    
})