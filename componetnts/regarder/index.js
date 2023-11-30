// Regarder.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Me from './Me';

const Stack = createStackNavigator();

function Regarder({ navigation }) {
  return (
    <View>
      <Text>Regarder Screen</Text>
      <Button
        title="Aller à Me"
        onPress={() => navigation.navigate('MeStack')}
      />
    </View>
  );
}

function RegarderStack() {
  return (
    <Stack.Navigator initialRouteName="Regarder">
      <Stack.Screen name="Regarder" component={Regarder} />
      <Stack.Screen name="MeStack" component={Me}/>
    </Stack.Navigator>
  );
}

export default RegarderStack;
