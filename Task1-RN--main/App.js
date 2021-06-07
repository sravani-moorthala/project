import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import welcome from './src/welcome';
import signup from './src/signup';
import forget from './src/forget';
import login from './src/login';
import emslist from './src/emslist';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WELCOME">
        <Stack.Screen
          name="WELCOME"
          component={welcome}
          options={({title: 'WWater'}, {headerShown: false})}
        />
        <Stack.Screen
          name="LOGIN"
          component={login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SIGNUP"
          component={signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FORGET"
          component={forget}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EMS"
          component={emslist}
          options={({title: 'EMS'}, {headerTitleAlign: 'center'})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
