import { View, Text, ScrollView , Image, Button, TouchableOpacity, StyleSheet} from 'react-native'
import React, {useState} from 'react'
import MyImageCarousel from './carousel'
import {  Ionicons } from '@expo/vector-icons';
import ComponentDisplay from './componentDisplay';

const Home = () => {
  const [isDecrease, setIsDecrease] = useState(false);
  const [marginTop, setMarginTop] = useState(0);
  const [activeComponent, setActiveComponent] = useState(1);

  const handleChangeValue = (n) => {
    // Changez la valeur de activeComponent ici, par exemple, incrémentez-la de 1
    setActiveComponent(n);
  };
  


  const modifyMarginTop = () => {
    // Si isDecrease est vrai, diminue de 30%, sinon réinitialise à 0%
    const newMarginTop = isDecrease ? -30 : 0;
    setMarginTop(newMarginTop);
    // Inverse la valeur de isDecrease pour la prochaine fois
    setIsDecrease(!isDecrease);
  };

  const MainButtons = ({ onButtonPress , onPressMore }) => (
    <ScrollView horizontal style={{ backgroundColor: "white", borderRadius: 20 }}>
      <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={() => handleChangeValue(1)}>
            <Ionicons name="ios-home" size={24} color="rgba(255, 249, 76, 0.95)" style={{
              marginRight: 10,
            }} />
          <Text style={styles.buttonText}>Tous</Text>
          
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.button} onPress={() => handleChangeValue(2)}>
            <Ionicons name="md-cash" size={24} color="rgba(255, 249, 76, 0.95)" style={{
              marginRight: 10,
            }} />
          <Text style={styles.buttonText} >Actus economies</Text>
          
          </TouchableOpacity>

          
         
        <TouchableOpacity style={styles.button} onPress={onPressMore}>
          <Ionicons name="ios-add" size={24} color="rgba(255, 249, 76, 0.95)" />
        </TouchableOpacity>

        
     
      </View>
    </ScrollView>
  );
  
  const AdditionalButtons = ({ onButtonPress, onPressBack }) => (
    <ScrollView horizontal style={{ backgroundColor: "white", borderRadius: 20 }}>
      <View style={styles.container}>
          <TouchableOpacity  style={styles.button}>
          <Ionicons name="code-slash" size={24} color="rgba(255, 249, 76, 0.95)" style={{
              marginRight: 10,
            }} />
            <Text style={styles.buttonText} onPress={() => handleChangeValue(3)}>Technologie</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.button} >
          <Ionicons name="business" size={24} color="rgba(7, 144, 186, 0.85)" style={{
              marginRight: 10,
            }} />
            <Text style={styles.buttonText}>Entrepreunariat</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => handleChangeValue(2)}>
            <Ionicons name="ios-logo-usd" size={23} color="rgba(7, 144, 186, 0.85)" style={{
              marginRight: 10,
            }} />
          <Text style={styles.buttonText} >Investir en Afrique</Text>
          
          </TouchableOpacity>

  
          <TouchableOpacity  style={styles.button}>
          <Ionicons name="mail-outline" size={24} color="rgba(255, 249, 76, 0.95)" style={{
              marginRight: 10,
            }} />
            <Text style={styles.buttonText}>Contact</Text>
          </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onPressBack}>
          <Ionicons name="ios-arrow-back" size={24} color="rgba(255, 249, 76, 0.95)" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );

  const Button = () => {
    const buttonData = [
      { id: 1, label: "Tous" },
      { id: 2, label: "Entrepreunariat" },
      { id: 3, label: "Politique" },
      { id: 4, label: "Sport" },
      { id: 5, label: "Technologie" },
      { id: 6, label: "Divers" },
      { id: 7, label: "Contact" },
      { id: 8, label: "Aider les enfants" },
    ];
  
    const [showAllButtons, setShowAllButtons] = useState(false);
  
    const visibleButtons = showAllButtons ? buttonData : buttonData.slice(0, 3);
  
    const onPressMore = () => {
      setShowAllButtons(true);
    };
  
    const onPressBack = () => {
      setShowAllButtons(false);
    };
  
    if (!showAllButtons) {
      return <MainButtons buttons={visibleButtons} onButtonPress onPressMore={onPressMore} />;
    } else {
      return <AdditionalButtons buttons={visibleButtons} onButtonPress onPressBack={onPressBack} />;
    }
  };

  

  const handleButtonPress = (componentNumber) => {
    setActiveComponent(componentNumber);
  }
  return (
    <View style={{backgroundColor: 'rgba(255, 249, 76, 0.95)', height: '100%', width: '100%',}}>
      <View style={{flexDirection: 'row', height:'20%'}}>
          <View style={{
           
            justifyContent: 'center',
            top: 0,
          }}>
            <Image
              style={{
                width: 200,
                resizeMode:'contain'
              }}
              source={require('./images/gate-news-africa-vao2.png')}
            />
          </View>
          <View style={{
            width:'50%',  
            justifyContent: 'center',
            top: 0,
          }}>
           <MyImageCarousel/>
          </View>
          
      </View>

      
    
      <View  style={{ backgroundColor: 'white',
                      width: '100%',
                      borderRadius: 30,  
                      marginBottom: '-20%', 
                      height:'100%', 
                      marginTop: `${marginTop}%`,
                    }}>
                <View style={{ padding: 10, flexDirection:'row',}}>
                    <Button/>
                    <TouchableOpacity onPress={modifyMarginTop} style={{marginTop: 20,}}>
                        {marginTop === 0 ? (
                          <Ionicons name="arrow-up" size={30} color="black" />
                        ) : (
                          <Ionicons name="arrow-down" size={30} color="black" />
                        )}
                  </TouchableOpacity>
                </View>
                  <ComponentDisplay activeComponent={activeComponent} />

                
                
               
        </View>
                          
            
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 6,
    borderRadius: 20,

  },
  button: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "black",
    margin: 8,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});


export default Home