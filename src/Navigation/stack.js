import React from 'react';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from '../screens/Login';
import Signup1 from '../screens/Signup1';
import BottomTab from './BottomTab';
import Profile from '../screens/profile';
import FileUpload from '../screens/FileUpload';
import Positive from '../screens/Positive';
import Negative from '../screens/Negative';

const Stack = createNativeStackNavigator();

const Stacks = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Signup" component={Signup1} />
      <Stack.Screen name="Vaccination" component={BottomTab} />
     
      <Stack.Screen name="FileUpload" component={FileUpload} />
      <Stack.Screen name="Negative"component={Negative} />
      <Stack.Screen name="Positive" component={ Positive} />

    </Stack.Navigator>
  );
};
export default Stacks;
