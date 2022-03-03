import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { AuthContext } from './AuthProvider';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack =createNativeStackNavigator();

const Routes = () => {
    const { user, setUser } = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);

    const onAuthStateChanged = (user) => {
        setUser(user);
        if (initializing) setInitializing(false);
    }
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);
    if (initializing) return null;



    return (
        <NavigationContainer>
           {user? <Stack.Screen name="Signup" component={Signup}/>:<Stack.Screen name="login" component={Login}/> }
        </NavigationContainer>
    )
}
export default Routes;