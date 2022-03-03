import react from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Hospital from './src/screens/Hospital/Hospital';
import HomeScreen from './src/screens/HomeScreen';


const Tab = createBottomTabNavigator();


const Bottom =() => {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Hospital" component={Hospital} />
                <Tab.Screen name="Home" component={HomeScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Bottom;