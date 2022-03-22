import React, { useState } from "react";
import { View, Text } from "react-native";
import { CheckBox } from 'react-native-elements'
import CustomButton from "../../components/CustomButton";
import { SYMPTOMS } from "../../inputs/Text";

import { styles } from './Styles'

const Dailytracker = ({ navigation }) => {

  const [isSelected, setSelection] = useState(false);

  const [isSelected1, setSelection1] = useState(false);

  const [isSelected2, setSelection2] = useState(false);

  const [isSelected3, setSelection3] = useState(false);

  const [isSelected4, setSelection4] = useState(false);

  const [isSelected5, setSelection5] = useState(false);

  const [isSelected6, setSelection6] = useState(false);

  const [isSelected7, setSelection7] = useState(false);
  const [count, setCount] = useState(0);

  const Track = () => {
    //alert(count);
    if (count >= 5) {
      navigation.navigate("Positive")
    } else {
      navigation.navigate("Negative")
    }
  }

  return (

    <View style={styles.container}>
      <Text style={styles.heading}> {SYMPTOMS}</Text>
      <View style={styles.checkboxContainer}>
        <CheckBox
          center
          title="Cold"
          key="Cold"
          checked={isSelected}
          onPress={() => {
            setSelection(!isSelected)
            if (!isSelected) {
              setCount(count + 1)
            }
            else {
              setCount(count - 1)
            }
            console.log("Set Slection", !isSelected);
            console.log("Count", count);
          }}
        />
        <CheckBox
          center
          title="Cough"
          key="Cough"
          checked={isSelected1}
          onPress={() => {
            setSelection1(!isSelected1)
            if (!isSelected1) {
              setCount(count + 1)
            }
            else {
              setCount(count - 1)
            }
            console.log("Set Slection1", !isSelected1);
            console.log("Count", count);
          }}
        />
        <CheckBox
          center
          title="Fever"
          key="Fever"
          checked={isSelected2}
          //checkedIcon="square"
          // uncheckedIcon="square"
          onPress={() => {
            setSelection2(!isSelected2)
            if (!isSelected2) {
              setCount(count + 1)
            }
            else {
              setCount(count - 1)
            }
            console.log("Set Slection 2", !isSelected2);
            console.log("Count", count);
          }}
        />
        <CheckBox
          center
          title="BP"
          key="Bp"
          checked={isSelected3}
          //checkedIcon="square"
          //uncheckedIcon="square"
          onPress={() => {
            setSelection3(!isSelected3)
            if (!isSelected3) {
              setCount(count + 1)
            }
            else {
              setCount(count - 1)
            }
            console.log("Set Slection 3", !isSelected3);
            console.log("Count", count);
          }}
        />
        <CheckBox
          center
          title="No Smell"
          key="No Smell"
          checked={isSelected4}
          //  checkedIcon="square"
          // uncheckedIcon="square"
          onPress={() => {
            setSelection4(!isSelected4)
            if (!isSelected4) {
              setCount(count + 1)
            }
            else {
              setCount(count - 1)
            }
            console.log("Set Slection 4", !isSelected4);
            console.log("Count", count);
          }}
        />
        <CheckBox
          center
          title="Oxygen Level"

          checked={isSelected5}
          //checkedIcon="square"
          //uncheckedIcon="square"
          onPress={() => {
            setSelection5(!isSelected5)
            if (!isSelected5) {
              setCount(count + 1)
            }
            else {
              setCount(count - 1)
            }
            console.log("Set Slection 5", !isSelected5);
            console.log("Count", count);
          }}
        />
        <CheckBox
          center
          title="No Taste"
          checked={isSelected6}
          // checkedIcon="square"
          //uncheckedIcon="square"
          onPress={() => {
            setSelection6(!isSelected6)
            if (!isSelected6) {
              setCount(count + 1)
            }
            else {
              setCount(count - 1)
            }
            console.log("Set Slection 6", !isSelected6);
            console.log("Count", count);
          }}
        />
        <CheckBox
          center
          title="Body Pains"
          checked={isSelected7}
          // checkedIcon="square"
          //uncheckedIcon="square"
          onPress={() => {
            setSelection7(!isSelected7)
            if (!isSelected7) {
              setCount(count + 1)
            }
            else {
              setCount(count - 1)
            }
            console.log("Set Slection 7", !isSelected7);
            console.log("Count", count);
          }}
        />
      </View>
      <View style={styles.btnContainer}>
        <CustomButton title="Track" onPress={Track} style={styles.button} />
      </View>
    </View >
  );
}



export default Dailytracker;