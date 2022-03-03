import React from 'react';
import {Text,View,TouchableOpacity,StyleSheet, Platform} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
//import RNFetchBlob from 'react-native-fetch-blob';





const FileUpload = () =>{

 const Upload = async() =>  {
        try{
            const res = await DocumentPicker.pick({
                type:[DocumentPicker.types.allFiles],
            });
            
            console.log(res);
            console.log( JSON.stringify(res));
            console.log('URI : ' + res.uri)
//     RNFetchBlob.fs
//     .stat(res.uri)
//     .then((stat) => {
//       console.log(stat.name);
//  //output: /storage/emulated/0/WhatsApp/Media/WhatsApp Images/IMG-20200831-WA0019.jpg
//     })
//     .catch((err) => {
//       console.log(err);
//     });
                        
         } catch (err){
             if(DocumentPicker.isCancel(err)){
                 console.log("canceled")
             } else{
                 throw err;
             }
         }

    }
   

    return(
        <View style={styles.container}>
            <View style={styles.container1}>
                <Text style={styles.title}>Upload Your Vaccination certificate here</Text>
            <TouchableOpacity onPress={Upload} style={styles.button}>
            <Text>Upload</Text><FontAwesome5 name="cloud-upload-alt" />
            </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
},
container1:{
    flex:1,
    padding:30,
    justifyContent:"center",
    height:70
},
    button:{
        backgroundColor:"#ee82ee",
        alignItems:"center"
    },
    text:{
        fontWeight:"bold",
        fontSize:30
    },
    title:{
        fontSize:18
    }
})






export default FileUpload;