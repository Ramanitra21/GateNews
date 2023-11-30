import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import BoutHelp from '../../home/buttonsTwo'
import Slide from './slide'
import Tous from './tousActu'
const Component1 = () => {
  return (
    <ScrollView style={{
      flexGrow: 1,
  }}>
     <View style={{
      marginLeft: '5%'
      }}>
        <BoutHelp/>
      </View>
      <View style={{
        height:300

      }}>
        <Slide/>
      </View>
      <View style={{
        marginBottom: '70%'
      }}>
        <Tous/>
        <Tous/>
        <Tous/>
      </View>
  </ScrollView>
  )
}

export default Component1;