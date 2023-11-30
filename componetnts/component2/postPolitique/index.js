import { View, Text, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';

const PostPolitique = () => {
  return (
  <View
  style={{
    marginBottom: '20%',
}}>
    
   
    <View style={{
            marginBottom: '5%',
            
        }}>
            <Text style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: 'black'
            }}>Forum Africain du Tourisme : valorisation territoriale pour un tourisme durable</Text>
    </View>
    <View style={{
         flexDirection: 'row',
         justifyContent: 'space-between',
         backgroundColor: 'rgba(227, 223, 225, 0.)',
         alignItems: 'center',
         marginBottom: '5%'
        }}>
            <Text style={{
               fontSize: 15,
               color: 'rgba(7, 144, 186, 0.85)',
               
            }}>il y a 5h</Text>
            <View style={{
                
            }}>
                <Icon name="bookmark" size={20} color="rgba(7, 144, 186, 0.85)" />
            </View>
    </View>
   
    <View style={{
        borderRadius: 20,
        
    }}>
    
        
        <Image source={require("./images/polItique.jpg")} style={{
               width: '100%',
               height: 200,
               borderRadius: 20,

        }}/>
       
    </View>
    <View style={{
        marginTop: '5%'
        }}>
            <Text style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'gray'
            }}>En juillet 1989, lors de sa 25e session ordinaire de l'Assemblée des chefs d'État et de gouvernement à Addis-Abeba, en Éthiopie, l'Organisation de l'unit...</Text>
    </View>
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(227, 223, 225, 0.)',
        alignItems: 'center',
        marginTop: '5%'
        }}>
            <View style={{
               flexDirection:'row'
            }}>
                <Icon name="calendar" size={20} color="rgba(7, 144, 186, 0.85)" />
                <Text style={{ marginLeft: '15%', color: 'rgba(7, 144, 186, 0.85)'}}>10/01/2023</Text>
            </View> 
            <View style={{
                
            }}>
                <Icon name="user" size={20} color="rgba(7, 144, 186, 0.85)" />
                
            </View>
    </View>
 
  </View>
  )
}

export default PostPolitique