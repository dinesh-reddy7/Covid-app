import React, { useState, useEffect } from "react";
import { View, Text, Alert, Image,Button } from "react-native";
import auth from '@react-native-firebase/auth';
import { styles } from './Styles'
import { LOGIN, LOGINPAGE, SIGNUP } from "../../inputs/Text";
import { Input } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { read } from '../../redux/reducer/UserReducer';
import CustomButton from "../../components/CustomButton";





const LoginPage = ({ navigation }) => {


    //useState declaration
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //dispatching the values into action
    const dispatch = useDispatch();
    dispatch(read([email]))


    useEffect(() => {
        auth().onAuthStateChanged(user => {
            if (user) {
                navigation.navigate("DailyTracker");

            }
        })
    }, []);






    const Login = () => {
        if (email && password) {
            auth().signInWithEmailAndPassword(email, password)
                .then(userCredentials => {
                    const user = userCredentials.user;
                    console.log("logged in with", user.email);



                })
                .catch(err => alert(err))
        } else {
            Alert.alert("enter valid email and password")
        }


    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Covid App
            </Text>
            <Image
                style={styles.img}
                source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/covid-app-login-9a647.appspot.com/o/images%2FCOVID-Symptom-Tracker-logo.png?alt=media&token=dbea5d54-d802-4ccb-927c-4bc79abe7610' }}
            />
            <Text style={styles.welcome}>{LOGINPAGE}</Text>
            <Input
                placeholder='Enter your email'
                leftIcon={{ type: 'font-awesome', name: 'user' }}
                onChangeText={email => setEmail(email)}
            />
            <Input
                placeholder='Enter your password'
                placeholderTextColor="grey"
               
            
                onChangeText={password => setPassword(password)}
                leftIcon={{ type: 'font-awesome', name: 'lock' }}
                
            />



            <View style={styles.btncontainer}>
                <CustomButton title={LOGIN} onPress={Login} />
                <CustomButton title={SIGNUP} onPress={() => navigation.navigate("Signup")} />
            </View>
        </View>
    )
}



export default LoginPage;