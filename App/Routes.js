import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import {
  SplashScreen,
  LoginScreen,
  HomeScreen,
  VaccineScreen,
  CovidResultScreen,
} from "./Pages";

const Stack = createStackNavigator();

export default Router = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VaccineScreen"
        component={VaccineScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CovidResultScreen"
        component={CovidResultScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
