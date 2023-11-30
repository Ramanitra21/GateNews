import React from "react";
import { Ionicons } from "@expo/vector-icons"; // Importation de Ionicons
import {
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

const BoutHelp = () => {

  return (
    <ScrollView horizontal>
      <View style={styles.container}>
          
          <TouchableOpacity  style={styles.button}>
          <Ionicons name="heart-half-outline" size={24} color="rgba(255, 249, 76, 0.95)" style={{
            marginRight: 10,
          }} />
            <Text style={styles.buttonText}>Aider les enfants</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.button}>
          <Ionicons name="phone-portrait-outline" size={24} color="rgba(255, 249, 76, 0.95)" style={{
            marginRight: 10,
          }} />
            <Text style={styles.buttonText}>S'abonner</Text>
          </TouchableOpacity>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 6,
    
  },
  button: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: 'black',
    margin: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: "white", // Set your desired text color
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default BoutHelp;
