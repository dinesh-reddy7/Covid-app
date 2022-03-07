import React,{useState} from 'react';
import {Box,VStack,HStack,Heading,Checkbox,NativeBaseProvider, Center,Text, Button} from 'native-base';
import { COLD, COUGH, FEVER, OXYGEN, PAINS, SMELL, SYMPTOMS, TASTE, TRACK,BP } from '../../inputs/Text';







  const DailyTracker = ({navigation}) => {
  const [groupValue, setGroupValue] = useState([])


  const Track = () =>{
    if(groupValue.length <= 5){
      navigation.navigate("Negative");
    } else{
      navigation.navigate("Positive");
    }
  }
  return( 
  <NativeBaseProvider >
    <Center flex={1} px="3">
  <Box >
      <VStack space={8}>
        <HStack alignItems="baseline">
          <Heading fontSize="lg">{SYMPTOMS}</Heading>
        </HStack>
        <VStack>
          <Box>
            <Text>Selected: ({groupValue.length})</Text>
          </Box>
        </VStack>
        <Checkbox.Group colorScheme="green" defaultValue={groupValue} accessibilityLabel="pick an item" onChange={values => {
        setGroupValue(values || []);
      }}>
          <Checkbox value="Cold" >
            {COLD}
          </Checkbox>
          <Checkbox value="Cough" >
           {COUGH}
          </Checkbox>
          <Checkbox value="Fever" >
           {FEVER}
          </Checkbox>
          <Checkbox value="BP">
           {BP}
          </Checkbox>
          <Checkbox value="Pains" >
           {PAINS}
          </Checkbox>
           <Checkbox value="Taste">
           {TASTE}
          </Checkbox>
           <Checkbox value="Smell" >
          {SMELL}
          </Checkbox> <Checkbox value="Oxygen" >
           {OXYGEN}
          </Checkbox>
        </Checkbox.Group>
        <Button onPress={Track}>{TRACK}</Button>
      </VStack>
      
    </Box>
    </Center>
    </NativeBaseProvider>
  )
};


export default DailyTracker;




