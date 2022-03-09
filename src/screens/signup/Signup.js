import React,{useState} from 'react';
import {
    View,
    TextInput,
    Text,
    TouchableOpacity,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {styles} from './styles';
import { useDispatch } from 'react-redux';
import { read} from '../../redux/reducer/UserReducer';




const Signup = ({navigation}) => {



   // useState declaration
    const [email,setEmail] =useState();
    const [password,setPassword]=useState();
    const [confirmPassword,setConfirmPassword] =useState();

    useDispatch(read({email}));


    // registering the user using email and password
    const Register = () => {
       if( confirmPassword!== password){
             alert("password and confirm password doesn't match")
       } else if(email.length!==0 && password.length !==0){
        auth()
        .createUserWithEmailAndPassword(email,password)
        .then(userCredentials => {
            const user=userCredentials.user;
            console.log(user.email);
            navigation.navigate("DailyTracker");
           
        })
        .catch(error => alert(error.message))
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
             onChangeText={email => setEmail(email)}/>
            <Text style={styles.text}>
                Password:
            </Text>
            <TextInput
                style={styles.inputStyle}
               placeholder='enter password'
                onChangeText={password => setPassword(password)}
                secureTextEntry
                selectionColor="green" />
                <Text style={styles.text}> Confirm password:</Text>
                <TextInput
                style={styles.inputStyle}
                placeholder='enter password'
                onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
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
    );
}



export default Signup;