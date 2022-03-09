import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Stacks from './src/navigation/stack';
import { Provider } from 'react-redux';
import { store } from './src/redux/Store';







const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer  >
      <Stacks />
     
    </NavigationContainer>
    </Provider>

  );
}
export default App;
