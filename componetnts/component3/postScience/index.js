import { View, Text, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';


const PostScience = () => {
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
            }}>AFIS 2023: Huawei partage son expertise en technologies numériques</Text>
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
    
        
        <Image source={require("./images/huawei.jpg")} style={{

            width: '100%',
            height: '100%',
            resizeMode:'contain',
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
            }}>La 3e édition de l’Africa Financial Industry Summit (AFIS) s’est tenu à Lomé, au Togo, les 15 et 16 novembre 2023, sous le thème « Construire une industrie financière africaine de classe mondiale...</Text>
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

export default PostScience