import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  SplashScreen, 
  LoginScreen,
} from './Pages';
import HomeScreen from './Pages/HomeScreen';

const Stack = createStackNavigator();

export default Router = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
     <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}} />
     <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}} />
     <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}} />
    </Stack.Navigator>
       );
}; 