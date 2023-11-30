import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../home";


const Routes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="GATE AFRI"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="GATE AFRI" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
