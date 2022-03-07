import React, { useReducer } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {styles} from './Styles'

const Profile = ({ navigation }) => {


  const Signout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
    navigation.navigate("LoginPage")

  }


  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <Image
        style={styles.img}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgKPodsrwo-ZHV3T0mGjIoC5U-KEMZFRGgvA&usqp=CAU',
        }}
      />

      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.txt}>Covid App</Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate('Contacts')}>
            <Text>Emergency contact</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate("FileUpload")}>
            <Text>Vaccination certificate</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={Signout}>
            <Text>LogOut</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Profile;

