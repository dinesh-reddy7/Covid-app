import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Hospital from '../screens/Hospital/Hospital';
import Profile from '../screens/profile';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto'
import Vaccination from '../screens/Vaccination';
import Doc from '../screens/Doc';







const Tab = createBottomTabNavigator();
const BottomTab = () => {
    return(
      
        <Tab.Navigator screenOptions={{header:()=>null}}>
         
          <Tab.Screen name="Vaccination" component={Vaccination}
          options={{ tabBarIcon:({color,size})=>(<Fontisto name="injection-syringe" color={color} size={size}/>)}} 
          />
         
          <Tab.Screen name="Hospital" component={Hospital}  
          options={{ tabBarIcon:({color,size})=>(<FontAwesome name="hospital-o" color={color} size={size}/>)}} 
          />
         
          <Tab.Screen name="Profile" component={Profile} 
          options={{ tabBarIcon:({color,size})=>(<FontAwesome name="id-badge" color={color} size={size}/>)}}
           />
         
        </Tab.Navigator>
        
    )
}

export default BottomTab;