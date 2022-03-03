import React from 'react';
import { StyleSheet,View,Text } from 'react-native';

const NestedScreen =({route}) =>{
    return(
        <View>
            <Text>{route.params.msg}</Text>
        </View>
    )
}

export default NestedScreen;