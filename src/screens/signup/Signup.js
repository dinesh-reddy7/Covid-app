import React,{useState} from 'react';
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
import auth from '@react-native-firebase/auth';
import {styles} from './styles';



const Signup = ({navigation}) => {



   
    const [email,setEmail] =useState();
    const [password,setPassword]=useState();
    

    const Register = () => {
       if(email && password){
        auth()
        .createUserWithEmailAndPassword(email,password)
        .then(userCredentials => {
            const user=userCredentials.user;
            console.log(user.email);
            navigation.navigate("LoginPage");
        })
        .catch(error => alert(error.message))
    }else{
        alert("enter email and password")
    }
    
    
    }

    return (
        <View style={styles.container}>
        <View style={styles.section1}>
            <Text style={styles.heading}>Welcome</Text>
            <Text style={styles.subHeading}>Sigup to continue</Text>
            
            <Text style={styles.text}>Email:</Text>
            <TextInput style={styles.inputStyle}
             placeholder='enter email address' 
             textAlign='center'
             onChangeText={email => setEmail(email)}/>
           
            <Text style={styles.text}>Password:</Text>

            <TextInput
                style={styles.inputStyle}
                placeholder='enter password'
                textAlign='center'
                onChangeText={password => setPassword(password)}
                secureTextEntry
                selectionColor="green" />
            <View style={{padding:10,alignContent:"center",paddingTop:10}}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={Register}
                >
                    <Text style={{ textAlign: "center", fontSize: 20 }}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>

        </View>
    )
}



export default Signup;