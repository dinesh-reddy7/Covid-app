import 'react-native-gesture-handler'
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import BottomTab from './src/Navigation/BottomTab';
import Stacks from './src/Navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Signup1 from './src/screens/Signup1';
// import LoginPage from './src/screens/Login';
// import Hospital from './src/screens/Hospital/Hospital';




const Tab = createBottomTabNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stacks/>
      {/* <BottomTab/> */}
    </NavigationContainer>
    
  );
}
  export default App;
