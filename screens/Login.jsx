import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ImageBackground, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const storedEmail = await AsyncStorage.getItem("user_email");
      const storedPassword = await AsyncStorage.getItem("user_password");
      const storedFirstName = await AsyncStorage.getItem("user_firstName");

      if (email === storedEmail && password === storedPassword) {
        Alert.alert("Login Successful", `Welcome back, ${storedFirstName}!`);
        navigation.navigate("Home"); // Navigate to Home after success
      } else {
        setError("Invalid email or password.");
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
    }
  };

  const goToRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <ImageBackground
      source={require('../assets/bg.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
        />
        <Button title="Login" onPress={handleLogin} />
        <TouchableOpacity onPress={goToRegister}>
          <Text style={styles.registerText}>New? Register here</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 6,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  error: {
    color: "red",
    marginBottom: 10,
    textAlign: "center",
  },
  registerText: {
    marginTop: 20,
    color: "#007bff",
    textAlign: "center",
    textDecorationLine: "underline",
  },
});
