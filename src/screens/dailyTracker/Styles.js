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
      flexDirection: "row",
      marginBottom: 20,
  
    },
    checkbox: {
      alignSelf: "center",
  
  
    },
    label: {
      margin: 8,
  
  
    },
    button: {
      marginTop: 10,
      height: 45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
      width: 250,
      borderRadius: 30,
      backgroundColor: 'blue',
    }
  });