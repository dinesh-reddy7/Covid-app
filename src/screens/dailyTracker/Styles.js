import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "flex-start",
      justifyContent: "center",
      backgroundColor: "pink",
  
    },
    heading:{
       fontSize:40,
       paddingBottom:20,
       paddingTop:20 
    },
    checkboxContainer: {
      
      alignItems:"flex-start",
      marginBottom: 20,
      paddingLeft:40
  
    },
    checkbox: {
      alignSelf: "center",
  
  
    },
    label: {
      margin: 8,
  
  
    },
    btnContainer:{
      paddingLeft:50
    },
    button: {
      marginTop: 10,
      height: 55,
      flexDirection: 'row',
      justifyContent: 'center',

      marginBottom: 20,
      width: 150,
      borderRadius: 10,
      backgroundColor: 'lightblue',
      paddingLeft:20
    }
  });