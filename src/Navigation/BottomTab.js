import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Hospital from '../screens/Hospital/Hospital';
import Profile from '../screens/profile/Profile';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto'
import Vaccination from '../screens/vaccination/Vaccination';
import DailyTracker from '../screens/dailyTracker/DailyTracker';
// import Upload from '../screens/Upload';








const Tab = createBottomTabNavigator();
const BottomTab = () => {
    return(
      
        <Tab.Navigator screenOptions={{header:()=>null}}>
           <Tab.Screen name="DailyTracker" component={DailyTracker}
           options={{ tabBarIcon:({color,size})=>(<FontAwesome5 name="hand-holding-medical" color={color} size={size}/>),
           tabBarActiveTintColor: 'tomato',
           tabBarInactiveTintColor: 'gray',}} 
           />
       
         
          <Tab.Screen name="Vaccination" component={Vaccination}
          options={{ tabBarIcon:({color,size})=>(<Fontisto name="injection-syringe" color={color} size={size}/>),
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',}} 
          />
         
          <Tab.Screen name="Hospital" component={Hospital}  
          options={{ tabBarIcon:({color,size})=>(<FontAwesome name="hospital-o" color={color} size={size}/>),
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'grey',}} 

          />
         
          <Tab.Screen name="Profile" component={Profile} 
          options={{ tabBarIcon:({color,size})=>(<FontAwesome name="id-badge" color={color} size={size}/>),
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',}}
           />
         
        </Tab.Navigator>
        
    )
}

export default BottomTab;