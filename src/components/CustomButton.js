import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native';
import React from 'react';





const CustomButton = ({ title,style, ...rest }) => {
    return (
        <View style={styles.btncontainer}>
            <TouchableOpacity style={[styles.btnStyle,style]} {...rest}>
                <Text style={styles.btnText}>
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomButton;


//Styles

const styles=StyleSheet.create({
    btnText:{
        fontSize: 18,
        textAlign: "center"
    },
    btnStyle:{
        backgroundColor: "#5f9ea0",
        width: "90%",
        borderRadius: 25,
        padding: 15
    },
    btncontainer: {
        flexDirection: "row",
        justifyContent: "space-between", 
        width: "50%",
    }
})