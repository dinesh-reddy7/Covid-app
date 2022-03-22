import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {styles} from './Styles'
import { CERTIFICATE, CONTACT, COVID, SIGNOUT } from '../../inputs/Text';





const Profile = ({ navigation }) => {
   const email= auth().currentUser.email;


  const Signout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
    navigation.navigate("LoginPage")

  }


  return (
    <View style={styles.container}>
     <TouchableOpacity></TouchableOpacity>
      <View style={styles.header} />
      <Image
        style={styles.img}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgKPodsrwo-ZHV3T0mGjIoC5U-KEMZFRGgvA&usqp=CAU',
        }}
      />
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.txt}>
            User Email:  {email}
          </Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate('Contacts')}>
            <Text>{CONTACT}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate("Upload")}>
            <Text>{CERTIFICATE}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={Signout}>
            <Text>{SIGNOUT}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Profile;