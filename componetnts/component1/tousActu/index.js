import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tous = () => {
  return (
   <View style={{
      marginRight: 100
   }}>
  
    <View style={{
      backgroundColor: 'white',
      padding: 10,
      marginRight: -40
    }}>
      <View style={styles.container}>
        {/* Partie gauche (Texte) */}
        <View style={styles.leftContainer}>
        <Image
            source={require('./images/info1.jpg')}
            style={styles.image}
          />
        </View>

        {/* Partie droite (Image) */}
        <View style={styles.rightContainer}>
         <View style={{
            flexDirection:'row'
         }}>
             <Text style={{
                
                marginLeft: 10,
                fontSize: 15,
                color: 'rgba(7, 144, 186, 0.85)',
            }}> News Politique
            </Text>

            <Icon name='ellipsis-h' size={25} color={'black'} style={{           
                marginLeft: '20%',
                marginTop: '0%'
            }}/>

         </View>
        <View style={{
          padding: 10,
          width: '90%'
        }}>
        <Text style={{
          fontWeight: 'bold',
        }}>
                Nous nous attachons enfin à analyser les recouvrements entre les dispositifs de gouvernement
         </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginLeft: '4%', marginTop: '15%',}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Icon name="calendar" size={20} color="rgba(7, 144, 186, 0.85)" />
                      <Text style={{ marginLeft: 5, color: 'black'}}>10/01/2023</Text>
                    </View>

                

                    <View style={{ flexDirection: 'row', marginRight: 50}}>
                      <Icon name="user" size={20} color="rgba(7, 144, 186, 0.85)" />
                </View>
        </View>
        </View>
      </View>
     
    </View>
   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Disposition horizontale
  },
  leftContainer:{
    width: '60%',
    height: '100%',
    
    borderRadius: 20
  },
  rightContainer: {
    width: '70%',
    marginTop:'2%',
     },
  image: {
    width: '100%', // Ajustez la largeur selon vos besoins
    height: 150, // Ajustez la hauteur selon vos besoins
    resizeMode: 'cover',
    borderRadius: 20,
  },

});

export default Tous;
