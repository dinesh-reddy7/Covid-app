import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import auth from '@react-native-firebase/auth';

const Profile = ({navigation}) => {


 const Signout = () =>{
  auth()
  .signOut()
  .then(() => console.log('User signed out!'));
  navigation.navigate("Login")

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
          <Text style={styles.txt}>User Name</Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate('Emergency')}>
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

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00BFFF',
    height: 200,
  },
  img: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130,
  },

  body: {
    marginTop: 50,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },

  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
  txt: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});