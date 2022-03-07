import 'react-native-gesture-handler'
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
// import BottomTab from './src/navigation/BottomTab';
import Stacks from './src/Navigation/stack';


// import Hospital from './src/screens/Hospital/Hospital';




//const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stacks />
      {/* <BottomTab/> */}
    </NavigationContainer>

  );
}
export default App;
