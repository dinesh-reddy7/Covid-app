import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, NativeModules } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import storage from '@react-native-firebase/storage';
import {RNFetchBlob,stat,fs} from 'react-native-fetch-blob';






const FileUpload = () => {
    const [fileName, setFileName] = useState();
    const [filePath, setFilePath] = useState();
    const [loading, setLoading] = useState(false);
    const [process, setProcess] = useState("");

    const ChooseFile = async () => {

        //Choose File to upload
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
            });

            console.log(res);


            const filePath = res[0].uri.replace("content://", "")
            console.log(filePath)
            let fileName = res[0].name;
            //   console.log(FilePath);
            //   let reference = storage().ref(imageName);
            //   let task = reference.putFile(FilePath);               // 3

            //   task.then(() => {                                 // 4
            //       console.log('Image uploaded to the bucket!');
            //   }).catch((e) => console.log('uploading image error => ', e));
            
           
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log("canceled")
            } else {
                throw err;
            }
        }

    }
    const UploadFile = () => {
        try {
            // Check if file selected
            if (filePath.length == 0)
              return alert("Please Select any File");
            setLoading(true);
      
            // Create Reference
            
           
            const reference = storage().ref(`/myfiles/${fileName}`);
      
            // Put File
            const task = reference.putFile(filePath);
            // You can do different operation with task
            // task.pause();
            // task.resume();
            // task.cancel();
      
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
            setFilePath();
          } catch (error) {
            console.log("Error->", error);
            alert(`Error-> ${error}`);
          }
          setLoading(false);
        
    }

    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Text style={styles.title}>Upload Your Vaccination certificate here</Text>
                <TouchableOpacity onPress={ChooseFile} style={styles.button}>
                    <Text>Choose File</Text><FontAwesome5 name="cloud-upload-alt" />
                </TouchableOpacity>
                <TouchableOpacity onPress={UploadFile} style={styles.button}>
                    <Text>Upload File</Text><FontAwesome5 name="cloud-upload-alt" />
                </TouchableOpacity>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    container1: {
        flex: 1,
        padding: 30,
        justifyContent: "center",
        height: 70
    },
    button: {
        backgroundColor: "#ee82ee",
        alignItems: "center",
    },
    text: {
        fontWeight: "bold",
        fontSize: 30
    },
    title: {
        fontSize: 18
    }
})






export default FileUpload;