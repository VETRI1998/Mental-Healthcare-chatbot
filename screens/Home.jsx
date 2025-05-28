import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function Home({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/home3.jpg')} // Background image
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Home Page</Text>

        {/* Top 3 buttons in a row */}
        <View style={styles.rowButtons}>
          <TouchableOpacity style={styles.squareButton} onPress={() => navigation.navigate('BotScreen')}>
            <Text style={styles.buttonText}>Your Bot</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.squareButton} onPress={() => navigation.navigate('Contact')}>
            <Text style={styles.buttonText}>Contact</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.squareButton} onPress={() => navigation.navigate('About')}>
            <Text style={styles.buttonText}>About Us</Text>
          </TouchableOpacity>
        </View>

        {/* Learn More Button at the bottom */}
        <View style={styles.learnMoreButtonContainer}>
          <TouchableOpacity style={styles.learnMoreButton} onPress={() => navigation.navigate('LearnMore')}>
            <Text style={styles.buttonText}>Learn More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // Cover the screen
  },
  container: {
    flex: 1,
    justifyContent: "space-between", // Distribute buttons at top and bottom
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 30,
  },
  rowButtons: {
    flexDirection: "row", // Arrange buttons horizontally
    justifyContent: "space-between",
    width: "100%", // Take full width
    marginBottom: 90, // Reduced space between buttons and Learn More
  },
  squareButton: {
    width: 100,
    height: 100,
    backgroundColor: "#007bff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  learnMoreButtonContainer: {
    position: 'absolute',
    bottom: 20,
    width: "100%",
    alignItems: "center", // Center the button
  },
  learnMoreButton: {
    width: "90%",
    height: 60,
    backgroundColor: "#28a745",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
