import React, { useState } from 'react';
import {
    View,
    TextInput,
    Text,
    TouchableOpacity,
    Alert
} from 'react-native';
import auth from '@react-native-firebase/auth';
import { styles } from './styles';
import firestore from '@react-native-firebase/firestore'


const Signup = ({ navigation }) => {

    // useState declaration
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [username, setUsername] = useState();


    // registering the user using email and password
    const Register = () => {
        if (confirmPassword !== password) {
            Alert.alert("password and confirm password doesn't match")
        } else if (email && password &&username) {
            auth()
                .createUserWithEmailAndPassword(email, password)
                .then(userCredentials => {
                    const user = userCredentials.user;
                    const id=auth().currentUser.uid;
                    console.log(user.email);
                    navigation.navigate("DailyTracker");
                    firestore()
            .collection("User")
            .doc(id)
            .set({
                username:username,
                email:email

            })
            Alert.alert("registred succesfully")
                })
                .catch(error => alert(error.message))

        } else {
            Alert.alert("Email and password cannot be empty")
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.section1}>
                <Text style={styles.heading}>
                    Welcome
                </Text>
                <Text style={styles.subHeading}>
                    Sigup to continue
                </Text>
                <Text style={styles.text}>
                    Username
                </Text>
                <TextInput style={styles.inputStyle}
                    placeholder='enter username'
                    onChangeText={text => setUsername(text)} />
                <Text style={styles.text}>
                    Email
                </Text>
                <TextInput style={styles.inputStyle}
                    placeholder='enter email address'
                    onChangeText={text => setEmail(text)} />
                <Text style={styles.text}>
                    Password
                </Text>
                <TextInput
                    style={styles.inputStyle}
                    placeholder='enter password'
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                    selectionColor="green" />
                <Text style={styles.text}>
                    Confirm password
                </Text>
                <TextInput
                    style={styles.inputStyle}
                    placeholder='enter confirm password'
                    onChangeText={text => setConfirmPassword(text)}
                    secureTextEntry
                    selectionColor="green" />
                <View style={{ padding: 10, alignContent: "center", paddingTop: 10 }}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={Register}>
                        <Text style={{ textAlign: "center", fontSize: 20 }}>
                            Register
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}



export default Signup;