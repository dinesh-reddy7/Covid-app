import { StyleSheet } from "react-native"
 const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#b0c4de",
    },
   item:{
       padding:20,
       backgroundColor:"white",
       marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:20,
   },
   title:{
       fontWeight:"bold",
       fontSize:40,
   },
   contact:{
       fontSize:20,
       color:"#c71585",
   },
   address:{
       fontSize:20,
       color:"#4682b4",
   }

})

export {styles};