import { View, Text, ScrollView, Image} from 'react-native'
import React from 'react'
import PostPolitique from './postPolitique';
import PostPolitique2 from './postPolitique2';
import {  Ionicons } from '@expo/vector-icons';
const Component2 = () => {
  return (
    <View>
      <View style={{
      flexDirection: 'row',
      marginLeft: '50%',
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
          Actus Economies
      </Text>
    </View>
    <ScrollView style={{
        flexGrow: 1,
        padding: 20,
    }}>
      <View style={{
        marginBottom:'90%'
      }}>
        <PostPolitique/>
        <PostPolitique/>
      </View>
    </ScrollView>
    </View>
  )
}

export default Component2