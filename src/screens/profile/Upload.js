
import React, { useState } from 'react';
import {Text,View,TouchableOpacity,Image,StyleSheet} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';




const Upload = () => {
    const[image,setImage] =useState();
    const[name,setName]=useState();
    const [loading, setLoading] = useState(false);
    const [process, setProcess] = useState("");
    const  SelectImage = () => {
        console.log("choose photo")
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            const filePath = image.path.replace("file://", "");
            console.log(filePath);
            setImage(filePath)
            const fileName = filePath.substring(filePath.lastIndexOf('/')+1);
            console.log(fileName);
            setName(fileName);
      
            
             
          }).catch((error) => console.log(error))
             
    }

    const UploadImage = () => {
        console.log("choose photo");
        try {
            // Check if file selected
            if (image.length == 0)
              return alert("Please Select any File");
            setLoading(true);
      
            // Create Reference
            
           
            const reference = storage().ref(`/myfiles/${name}`);
      
            // Put File
            const task = reference.putFile(image);
            
      
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
          } catch (error) {
            console.log("Error->", error);
            alert(`Error-> ${error}`);
          }
          setLoading(false);
        

    }





    return(
      <View style={styles.container}>
      <TouchableOpacity style={styles.selectButton} onPress={SelectImage}>
        <Text style={styles.buttonText}>Pick an image</Text>
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        {image !== null ? (
          <Image source={{ uri: image }} style={styles.imageBox} />
        ) : null}
      
         
      
          <TouchableOpacity style={styles.uploadButton} onPress={UploadImage}>
            <Text style={styles.buttonText}>Upload image</Text>
          </TouchableOpacity>
       
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
  selectButton: {
    borderRadius: 5,
    width: 150,
    height: 50,
    backgroundColor: '#8ac6d1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  uploadButton: {
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