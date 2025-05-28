// screens/AboutScreen.jsx
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Make sure expo/vector-icons is installed

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About Our App</Text>

      <View style={styles.section}>
        <FontAwesome name="heartbeat" size={40} color="#28a745" />
        <Text style={styles.heading}>Mental Health Focused</Text>
        <Text style={styles.text}>
          This app is dedicated to improving mental well-being through supportive AI-driven conversations.
        </Text>
      </View>

      <View style={styles.section}>
        <FontAwesome name="comments" size={40} color="#007bff" />
        <Text style={styles.heading}>Chat-Based Interface</Text>
        <Text style={styles.text}>
          Chat like you do on Instagram or WhatsApp. Our friendly bot is always here to talk and support you.
        </Text>
      </View>

      <View style={styles.section}>
        <FontAwesome name="users" size={40} color="#ffc107" />
        <Text style={styles.heading}>Built by Students</Text>
        <Text style={styles.text}>
          Developed by passionate students to make mental healthcare more accessible through technology.
        </Text>
      </View>

      <View style={styles.section}>
        <FontAwesome name="bullseye" size={40} color="#dc3545" />
        <Text style={styles.heading}>Our Mission</Text>
        <Text style={styles.text}>
          To provide a free, private, and friendly space for anyone seeking emotional support.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#333',
  },
  section: {
    marginBottom: 30,
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#222',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    paddingHorizontal: 10,
  },
});
