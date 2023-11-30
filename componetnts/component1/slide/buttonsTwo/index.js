import React from "react";
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
            <Text style={styles.buttonText}>Economie</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.button}>
            <Text style={styles.buttonText}>Afrique</Text>
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
    backgroundColor: 'rgba(7, 144, 186, 0.85)',
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
