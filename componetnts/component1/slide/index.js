import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ImageBackground, Text } from 'react-native';
import BoutNews from './buttonsTwo';
import { Ionicons } from "@expo/vector-icons"; // Importation de Ionicons
const images = [
  require('./images/info1.jpg'),
  require('./images/info2.jpg'),
  require('./images/info3.jpg'),
];

export default function Slide() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={images[currentImage]}
        style={styles.imageBackground}
      >
        <View style={{
          height:'100%',
          marginTop:'50%',
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.22)',
          borderRadius: 20,
        }}>
          <View style={{
    
          }}>
            <BoutNews/>
          </View>
          <View style={{
            marginLeft: 20,
            marginTop: '-4%'
          }}>
              <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
              }}>Le 11 avril 2019, l'armée a destitué le président soudanais après plusieurs mois de contestation.</Text>
          </View>
          <View style={{
             flexDirection: 'row',
             justifyContent: 'space-between',
             backgroundColor: 'rgba(227, 223, 225, 0.)',
             alignItems: 'center',
             padding: 10,
          }}>
            <View style={{
              flexDirection: 'row',
            }}>
                <Ionicons name="calendar" size={20} color="rgba(7, 144, 186, 0.85)" style={{
        
                }} />
                <Text style={{
                   color: "white", // Set your desired text color
                   fontSize: 16,
                   fontWeight: "bold",
                }}>10/12/2023</Text>
            </View>
            <View style={{
              flexDirection: 'row',

            }}>
                <Ionicons name="time" size={20} color="rgba(7, 144, 186, 0.85)" style={{
                marginRight: 10,
                }} />
               <Text style={{
                  color: "white", // Set your desired text color
                  fontSize: 16,
                  fontWeight: "bold",
                }}>12:15</Text>
            </View>
            <View style={{
              flexDirection: 'row',

            }}>
                <Ionicons name="people" size={20} color="rgba(7, 144, 186, 0.85)" style={{

                }} />
            </View>
           
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    borderRadius: 20,
    backgroundColor: 'white'
  },
  imageBackground: {
    
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20, // Vous pouvez ajuster la valeur en conséquence
    overflow: 'hidden', //
  },
  imageText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
