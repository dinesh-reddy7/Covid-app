import { StyleSheet } from "react-native";


 export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop:30,
        backgroundColor: "white",
    },
    title:{
    fontSize:20,
    fontWeight:"500"
    },
    img:{
        height:100,
        width:100
    },
    welcome: {
        
        fontSize: 50,
        textAlign: "center",
        margin: 5,
        textAlign: "center",
        color: "black",
       
        padding: 45
    },
    input: {
        width: "80%",
        backgroundColor: "white",
        borderRadius: 25,
        padding: 15,
        margin: 20,
        marginBottom: 20,
        color: "green",
        height: 50
    },
    forgot: {
        color: "red",
        padding: 35,
        fontSize: 16
    },
    button: {
        backgroundColor: "#5f9ea0",
        width: "45%",
        borderRadius: 25,
        padding: 15
    },
    btnText: {
        fontSize: 18,
        textAlign: "center"
    },
    btncontainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%"
    },
})