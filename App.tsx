import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ title: 'Sign Up' }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ title: 'Sign In' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
