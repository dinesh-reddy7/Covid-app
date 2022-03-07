import  React,{useState,useEffect} from "react";
import { View, Text, Alert, TextInput, TouchableOpacity } from "react-native";
import auth from '@react-native-firebase/auth';
import {styles} from './Styles'
import { LOGIN, LOGINPAGE,SIGNUP } from "../../inputs/Text";




const LoginPage = ({navigation}) => {

    
   
    const [email,setMail] = useState('')
    const [password, setPassword] = useState('')
    
   

  useEffect(() => {
   auth().onAuthStateChanged(user=>{
       if(user){
           navigation.navigate("DailyTracker");
       }
   })
  }, []);

  

    
    

    const Login = () =>{
        if(email && password){
        auth().signInWithEmailAndPassword(email,password)
        .then(userCredentials => {
            const user =userCredentials.user;
           
            console.log("logged in with",user.email);
            
           

           
        })
        .catch(err=> alert(err))
    }else{
        Alert.alert("enter valid email and password")
    }
        
        
    }
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>{LOGINPAGE}</Text>
            <TextInput style={styles.input} placeholder="Enter your email" textAlign="center" onChangeText={(email)=>setMail(email)} />
            <TextInput style={styles.input} placeholder="Enter your Password" textAlign="center" onChangeText={(email)=>setPassword(email)} secureTextEntry />

           

            <View style={styles.btncontainer}>
                <TouchableOpacity  style={styles.button}>
                    <Text style={styles.btnText} onPress={Login} >{LOGIN}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btnText} onPress={() =>navigation.navigate("Signup")}>{SIGNUP}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}



export default LoginPage;