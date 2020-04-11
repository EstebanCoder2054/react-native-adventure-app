import { StyleSheet, Text, View } from 'react-native';

//Navigation imports
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

//screens
import Home from './screens/home';
import Post from './screens/postDetails';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRoute='Home'
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Post' component={Post} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
