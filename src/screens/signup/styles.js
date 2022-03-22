import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#b0c4de",

    },
    heading:{
        fontSize:40

    },
    subHeading:{
        fontSize:20,
        paddingBottom:40
    },
    section1: {
        flex: 1,
        paddingTop: 5,
        height: 40,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
    },


    section2: {
        flex: 1,
        paddingTop: 10,
        height: 40,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
    },
    text: {
        padding: 10,
        fontWeight: "bold",
    },


    inputStyle: {
        width: "100%",
        
        borderRadius: 10,
        borderColor: '#dadae8',
        backgroundColor: "white",
        borderColor: 'black',
       

    },
    button: {

        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
        backgroundColor: "#90ee90",
        paddingTop: 10,
        width: "100%",
        alignItems:"center",
        borderRadius:10


    }
})