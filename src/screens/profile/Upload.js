import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';


const Upload = () => {
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [loading, setLoading] = useState(false);
  const [process, setProcess] = useState("");

  //converting filename to user UID
  let id = auth().currentUser.uid;
  let file = id;
  const extention = file.split('.').pop();
  const filename = file + '.' + extention;

  const SelectImage = () => {
    console.log("choose photo")
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      const filePath = image.path.replace("file://", "");
      console.log(image.path);
      console.log(filePath);
      setImage(filePath)
      const fileName = filePath.substring(filePath.lastIndexOf('/') + 1);
      console.log(fileName);
      setName(fileName);
      try {
        // Check if file selected
        if (image.length == 0)
          return alert("Please Select any File");
        setLoading(true);
  
        // Create Reference
  
  
        const reference = storage().ref(`/myfiles/${filename}`);
  
        // Put File
        const task = reference.putFile(filePath);
  
  
        task.on("state_changed", (taskSnapshot) => {
          setProcess(
            `${taskSnapshot.bytesTransferred} transferred 
                   out of ${taskSnapshot.totalBytes}`
          );
          console.log(
            `${taskSnapshot.bytesTransferred} transferred 
                   out of ${taskSnapshot.totalBytes}`
          );
        });
        task.then(() => {
          alert("Image uploaded to the bucket!");
          setProcess("");
        });
        setImage();
        const url = storage().ref(`/myfiles/${filename}`).getDownloadURL();
        console.log("URL:", url)
      } catch (error) {
        console.log("Error->", error);
        alert(`Error-> ${error}`);
      }
      setLoading(false);
  



    }).catch((error) => console.log(error))

  }

 const TakePhoto = () =>{
  ImagePicker.openCamera({
    width: 300,
    height: 400,
    cropping: true,
  }).then(image => {
    console.log(image);
  });
 }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {image !== null ? (
          <Image source={{ uri: image }} style={styles.imageBox} />
        ) : null}



      </View>
      <View style={styles.section}>
        <TouchableOpacity style={styles.selectButton} onPress={SelectImage}>
          <Text style={styles.buttonText}>Pick an image</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cameraButton} onPress={TakePhoto} >
          <Text style={styles.buttonText}>Take photo</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        {image !== null ? (
          <Image source={{ uri: image }} style={styles.imageBox} />
        ) : null}



      </View>
    </View>
  )
}
export default Upload;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#bbded6'
  },
  section: {
    paddingTop: 30
  },
  selectButton: {
    borderRadius: 5,
    width: 150,
    height: 50,
    backgroundColor: '#8ac6d1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraButton: {
    borderRadius: 5,
    width: 150,
    height: 50,
    backgroundColor: '#ffb6b9',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  imageContainer: {
    marginTop: 30,
    marginBottom: 50,
    alignItems: 'center'
  },
  progressBarContainer: {
    marginTop: 20
  },
  imageBox: {
    width: 300,
    height: 300
  }
});