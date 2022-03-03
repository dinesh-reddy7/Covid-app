import React from 'react';
import { Text, View } from 'react-native';
import { white } from 'react-native-paper/lib/typescript/styles/colors';

const negative = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "green",
     }}>
      <Text style = {{
        fontSize: 40,
        color:"white",
      }}>You have covid negative symptoms</Text>
    </View>
  )
}
export default negative;