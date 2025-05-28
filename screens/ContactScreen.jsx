import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importing Ionicons for icons

export default function ContactScreen() {
  const handlePhoneClick = () => {
    Linking.openURL('tel:+918248736004'); // Link for calling the phone number
  };

  const handleEmailClick = () => {
    Linking.openURL('mailto:vetri1998kpr@gmail.com'); // Link for opening email client
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>

      <View style={styles.contactSection}>
        <Ionicons name="mail" size={30} color="#007bff" />
        <Text style={styles.contactText}>Email: vetri1998kpr@gmail.com</Text>
        <TouchableOpacity onPress={handleEmailClick}>
          <Text style={styles.linkText}>Send Email</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contactSection}>
        <Ionicons name="call" size={30} color="#007bff" />
        <Text style={styles.contactText}>Phone: +91 8248736004</Text>
        <TouchableOpacity onPress={handlePhoneClick}>
          <Text style={styles.linkText}>Call Now</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contactSection}>
        <Ionicons name="mail" size={30} color="#007bff" />
        <Text style={styles.contactText}>Email: selvaesackyk3@gmail.com</Text>
        <TouchableOpacity onPress={handleEmailClick}>
          <Text style={styles.linkText}>Send Email</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contactSection}>
        <Ionicons name="call" size={30} color="#007bff" />
        <Text style={styles.contactText}>Phone: +91 6382992265</Text>
        <TouchableOpacity onPress={handlePhoneClick}>
          <Text style={styles.linkText}>Call Now</Text>
        </TouchableOpacity>
      </View>
       <View style={styles.contactSection}>
        <Ionicons name="mail" size={30} color="#007bff" />
        <Text style={styles.contactText}>Email:arunkumarkkm2205@gmail.com</Text>
        <TouchableOpacity onPress={handleEmailClick}>
          <Text style={styles.linkText}>Send Email</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contactSection}>
        <Ionicons name="call" size={30} color="#007bff" />
        <Text style={styles.contactText}>Phone: +91 6380878291</Text>
        <TouchableOpacity onPress={handlePhoneClick}>
          <Text style={styles.linkText}>Call Now</Text>
        </TouchableOpacity>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white', // Ensure readability on all screens
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#007bff', // Title color
  },
  contactSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  contactText: {
    fontSize: 15,
    marginLeft: 15,
    color: '#333', // Main text color
  },
  linkText: {
    fontSize: 16,
    color: '#007bff',
    marginLeft: 15,
    textDecorationLine: 'underline', // Link style
  },
});
