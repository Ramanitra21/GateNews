import { View, Text, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';

const PostScience2 = () => {
  return (
  <View>
    
    <View style={{
        padding: 10,
        height: 400,
        borderRadius: 20,
        marginBottom: '50%',
    }}>
    <View style={{
        marginBottom: '10'
        }}>
            <Text style={{
                fontSize:30,
                fontWeight: 'bold'
            }}>Maroc : une formation de codage gratuite</Text>
    </View>
    <View style={{
        flexDirection: 'row'
        }}>
            <Text style={{
                fontSize:15,
                color: 'rgba(7, 144, 186, 0.85)',
    
            }}>il y a 5h</Text>
            <View style={{
                marginLeft:'70%'
            }}>
                <Icon name="bookmark" size={20} color="#333" />
            </View>
    </View>
   
    <View style={{
        marginTop: '5%',
        height:'50%',     
    }}>
    
        
        <Image source={require("./images/codageForm.jpg")} style={{

            width: '100%',
            height: '100%',
            borderRadius: 20,
        }}/>
       
    </View>
    <View style={{
        }}>
            <Text style={{
                fontSize:20,
                fontWeight: 'bold',
                color: 'gray',
                marginTop: '2%'
            }}>Selon les données de la Banque africaine de développement (BAD), le taux de pénétration des Technologies de l'information et de la communication (TIC) à haut débit en Afrique était d'environ 7 % de la population en 2010. Les projections suggèrent que d'ici 2060...</Text>
    </View>
    <View style={{
        flexDirection: 'row',
        marginTop: '3%'
        }}>
            <View style={{
               flexDirection:'row'
            }}>
                <Icon name="calendar" size={20} color="rgba(7, 144, 186, 0.85)" />
                <Text style={{ marginLeft: '15%', color: 'black'}}>10/01/2023</Text>
            </View> 
            <View style={{
                marginLeft:'50%',
                flexDirection:'row'
            }}>
                <Icon name="user" size={20} color="rgba(7, 144, 186, 0.85)" />
                
            </View>
    </View>
    </View>
  </View>
  )
}

export default PostScience2