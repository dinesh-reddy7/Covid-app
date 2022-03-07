import { Center, Heading, NativeBaseProvider,Radio,Box, Button } from 'native-base';
import React from 'react';
import {View,Text} from 'react-native';
import { BOOSTERDOSE, FIRSTDOSE, SECONDDOSE, UPDATE, VACCINATIONSTATUS } from '../../inputs/Text';


const Vaccination = () => {
    return(
       <NativeBaseProvider >
           <Center>
               <Box mt="40">
               <Heading>{VACCINATIONSTATUS}</Heading>
           <Radio.Group defaultValue="1" name="exampleGroup" accessibilityLabel="favorite colorscheme">
      <Radio colorScheme="emerald" value="1" my={1}>
      {FIRSTDOSE}
      </Radio>
      <Radio colorScheme="secondary" value="2" my={1}>
       {SECONDDOSE}
      </Radio>
      <Radio colorScheme="warning" value="3" my={1}>
       {BOOSTERDOSE}
      </Radio>
    </Radio.Group>
    </Box>
    <Button mt="10">{UPDATE}</Button>
    </Center>
       </NativeBaseProvider>
    )
}

export default Vaccination;