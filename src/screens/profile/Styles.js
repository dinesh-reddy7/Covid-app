import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
      fontWeight:"bold"
    },
    
  });