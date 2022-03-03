import React,{useState,useContext} from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    Text,
    Image,
    KeyboardAvoidingView,
    Keyboard,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import {AuthContext} from '../fire-base/AuthProvider'




const Signup = () => {
    const [userName,setUserName]= useState();
    const [email,setEmail] =useState();
    const [password,setPassword]=useState();
    const [number,setNumber]=useState();




    const {register}= useContext(AuthContext);
    return (
    <View style={styles.container} >
    
        <View style={styles.section1}>
            <Text style={styles.text}>User name:</Text>
            <TextInput style={styles.inputStyle} 
            placeholder='enter username' 
            keyboardType='email-address'
            onChangeText={(userName) => setUserName(userName)}/>
            <Text style={styles.text}>Email:</Text>
            <TextInput style={styles.inputStyle} placeholder='enter email address' />
            <Text style={styles.text}>Mobile Number:</Text>

            <TextInput
                style={styles.inputStyle}
                placeholder='enter mobile number'
                onChangeText={(number) => setNumber(number)}
                keyboardType='numeric'
                selectionColor="green" />
            <Text style={styles.text}>Password:</Text>

            <TextInput
                style={styles.inputStyle}
                placeholder='enter password'
                onChangeText={(password) => setPassword(password)}
                secureTextEntry
                selectionColor="green" />
            <View style={{padding:10,alignContent:"center",paddingTop:10}}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => register(email,password)}

                >
                    <Text style={{ textAlign: "center", fontSize: 20 }}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>


    </View>


    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#b0c4de",

    },
    section1: {
        flex: 1,
        paddingTop: 50,
        height: 40,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
    },


    section2: {
        flex: 1,
        paddingTop: 10,
        height: 40,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
    },
    text: {
        padding: 10,
        fontWeight: "bold",
    },


    inputStyle: {
        width: "100%",
        borderWidth: 1,
        borderRadius: 30,
        borderColor: '#dadae8',
        backgroundColor: "white",
        borderColor: 'black',
        boarderWidth: 1

    },
    button: {

        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
        backgroundColor: "#90ee90",
        paddingTop: 10,
        width: "100%",
        alignItems:"center"


    }
})
export default Signup;