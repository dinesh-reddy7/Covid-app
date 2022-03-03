import React from 'react';
import {View,Text, Button,TextInput} from 'react-native';
//import { TextInput } from 'react-native-gesture-handler';
//import About from './About';
import { useDispatch,useSelector } from 'react-redux';
import { changeFrame,setName } from '../redux/reducer/changeReducer';


const HomeScreen = () => {
  const frame = useSelector(changeFrame);
  const dispatch = useDispatch();
  console.log("changed value" , frame)
  //const [number, onChangeNumber] = React.useState(null);
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{alignItems:"center", fontWeight:"bold",fontSize:40}}>{frame}</Text>
        {/* <Button onPress={() => dispatch(incremented())} title="increment counter"/>
        <Button onPress={() => dispatch(decremented())} title="decrement counter"/> */}
        <Button onPress={() => dispatch(setName()) } title="change frame" />
        <TextInput
        style={{height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,}}
        // onChangeText={onChangeNumber}
        // value={number}
         placeholder="useless placeholder"
        keyboardType="numeric"
      />

      </View>
    );
  }

  export default HomeScreen;