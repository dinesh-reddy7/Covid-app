import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import CheckBox from '@react-native-community/checkbox';
import { createStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

const Dailytracker = () => {

 const navigation=useNavigation();
  const [isSelected, setSelection] = useState(false);

  const [isSelected1, setSelection1] = useState(false);

  const [isSelected2, setSelection2] = useState(false);

  const [isSelected3, setSelection3] = useState(false);

  const [isSelected4, setSelection4] = useState(false);

  const [isSelected5, setSelection5] = useState(false);

  const [isSelected6, setSelection6] = useState(false);

  const [isSelected7, setSelection7] = useState(false);
  const Stack = createStackNavigator();
  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox} />
        <Text style={styles.label}>Cold</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected1}
            onValueChange={setSelection1}
            style={styles.checkbox} />
          <Text style={styles.label}>Cough</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected2}
            onValueChange={setSelection2}
            style={styles.checkbox} />
          <Text style={styles.label}>fever</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected3}
            onValueChange={setSelection3}
            style={styles.checkbox} />
          <Text style={styles.label}>oxygenlevel</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected4}
            onValueChange={setSelection4}
            style={styles.checkbox} />
          <Text style={styles.label}>Bp</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected5}
            onValueChange={setSelection5}
            style={styles.checkbox} />
          <Text style={styles.label}>Breathingisues</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected6}
            onValueChange={setSelection6}
            style={styles.checkbox} />
          <Text style={styles.label}> Body pain</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected7}
            onValueChange={setSelection7}
            style={styles.checkbox} />
          <Text style={styles.label}>loss of taste or smell</Text>
        </View>
        <View style={styles.btncontainer}>
          <TouchableOpacity
            onPress={() => {
              if (isSelected && isSelected1 && isSelected2 && isSelected3 && isSelected4 && isSelected5 &&
                isSelected6 && isSelected7) {
                navigation.navigate("Positive")
              } else {
                navigation.navigate("Negative")
              }
            }
            }>
            <Text style={styles.btnText}>Update</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View >
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "pink",

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


export default Dailytracker;