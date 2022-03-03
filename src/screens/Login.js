import  React,{useState,useEffect} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

import auth from '@react-native-firebase/auth';




const LoginPage = ({navigation}) => {

    
   
    const [email,setMail] = useState('')
    const [password, setPass] = useState('')

    
    

    const Login = () =>{
        auth().signInWithEmailAndPassword(email,password)
        .then(userCredentials => {
            const user =userCredentials.user;
            console.log("logged in with",user.email);
            navigation.navigate("Vaccination")
           
        })
        .catch(error => alert("invalid email and password"))
        
        
    }
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Login Page</Text>
            <TextInput style={styles.input} placeholder="Enter your email"  onChangeText={(val)=>setMail(val)} />
            <TextInput style={styles.input} placeholder="Enter your Password"  onChangeText={(val)=>setPass(val)} secureTextEntry />

            <TouchableOpacity>
                <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>

            <View style={styles.btncontainer}>
                <TouchableOpacity  style={styles.button}>
                    <Text style={styles.btnText} onPress={Login} >Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btnText} onPress={() =>navigation.navigate("Signup")}>Signup</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#b0c4de",
    },
    welcome: {
        fontFamily: "georgia",
        fontSize: 50,
        textAlign: "center",
        margin: 5,
        textAlign: "center",
        color: "black",
        fontStyle: "bold",
        padding: 45
    },
    input: {
        width: "80%",
        backgroundColor: "white",
        borderRadius: 25,
        padding: 15,
        margin: 20,
        marginBottom: 20,
        color: "green",
        height: 50
    },
    forgot: {
        color: "red",
        padding: 35,
        fontSize: 16
    },
    button: {
        backgroundColor: "#5f9ea0",
        width: "45%",
        borderRadius: 25,
        padding: 15
    },
    btnText: {
        fontSize: 18,
        textAlign: "center"
    },
    btncontainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%"
    }
})

export default LoginPage;