// ComponentDisplay.js
import React from 'react';
import { View } from 'react-native';
import Component1 from '../componetnts/component1';
import Component2 from '../componetnts/component2';
import Component3 from '../componetnts/component3';

const ComponentDisplay = ({ activeComponent }) => {
  return (
    <View>
      {activeComponent === 1 && <Component1 />}
      {activeComponent === 2 && <Component2 />}
      {activeComponent === 3 && <Component3 />}
    </View>
  );
}

export default ComponentDisplay;
