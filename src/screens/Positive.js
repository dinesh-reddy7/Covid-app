import React from 'react';
import { Text, View } from 'react-native';
import { white } from 'react-native-paper/lib/typescript/styles/colors';

const positive = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
     }}>
      <Text style = {{
        fontSize: 40,
        color:"white",
      }}>You have covid positive symptoms kindly take the test for covid</Text>
    </View>
  )
}
export default positive;