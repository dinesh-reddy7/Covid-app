import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from '../screens/loginPage/LoginPage';
import Signup from '../screens/signup/Signup';
import BottomTab from './BottomTab';
import FileUpload from '../screens/profile/FileUpload';
import Positive from '../screens/dailyTracker/Positive';
import Negative from '../screens/dailyTracker/Negative';
import Contacts from '../screens/profile/Contacts';
import Upload from '../screens/profile/Upload';

const Stack = createNativeStackNavigator();

const Stacks = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="DailyTracker" component={BottomTab} />
      <Stack.Screen name="FileUpload" component={FileUpload} />
      <Stack.Screen name="Contacts" component={Contacts} />
      <Stack.Screen name="Negative" component={Negative} />
      <Stack.Screen name="Positive" component={Positive} />
      <Stack.Screen name="Upload" component={Upload} />
    </Stack.Navigator>
  );
};
export default Stacks;
