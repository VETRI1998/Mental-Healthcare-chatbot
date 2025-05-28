import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import BotScreen from './screens/BotScreen';
import Login from './screens/Login';
import Register from './screens/Register';
import ContactScreen from './screens/ContactScreen'; // Import this
import AboutScreen from './screens/AboutScreen';
import LearnMoreScreen from './screens/LearnMoreScreen';




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="BotScreen" component={BotScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="LearnMore" component={LearnMoreScreen} />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
