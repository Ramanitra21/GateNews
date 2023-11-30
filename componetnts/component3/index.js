import { View, Text, ScrollView, Image} from 'react-native'
import React from 'react'

import {  Ionicons } from '@expo/vector-icons';
import PostTech from './postTech';
const Component3 = () => {
  return (
   <View style={{
    padding: 10,
   }}>
     <View style={{
        flexDirection: 'row',
        marginLeft: '20%',
        backgroundColor: 'black',
        borderRadius: 10,
        padding: 10,
        marginRight: '-100%',
        marginBottom : '10%'
      }}>
          <Ionicons name="md-cash" size={24} color="rgba(255, 249, 76, 0.95)" style={{
              marginRight: 10,
              marginTop: 2,
            }} />
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white'
          }}>
            Technologies et innovation
        </Text>
      </View>
       <ScrollView style={{
        flexGrow: 1,
        padding: 20,
    }}>

     
      <View style={{
        marginBottom:'90%'
      }}>
        <PostTech/>
        <PostTech/>
      </View>
    </ScrollView>
   </View>
  )
}

export default Component3