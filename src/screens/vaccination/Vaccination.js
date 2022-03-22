import { Center, Heading, NativeBaseProvider,Radio,Box, Button } from 'native-base';
import React,{useState} from 'react';
import { BOOSTERDOSE, FIRSTDOSE, SECONDDOSE, UPDATE, VACCINATIONSTATUS } from '../../inputs/Text';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';




const Vaccination = () => {

    const [value, setValue] = useState();
    
    const Update = () =>{
        let id = auth().currentUser.uid;
        try{
            firestore()
            .collection("Vaccination")
            .doc(id)
            .set({
                VaccinationStatus:value
            })
            alert("Vaccination status succesfully updated")
        }catch{
            err => console.log(err) ;
        }
    }

    return(
       <NativeBaseProvider >
           <Center>
               <Box mt="40">
               <Heading>{VACCINATIONSTATUS}</Heading>
           <Radio.Group  name="exampleGroup"   onChange={nextValue => {
    setValue(nextValue);}}>
      <Radio  value="1st dose completed"  my={1}>
      {FIRSTDOSE}
      </Radio>
      <Radio  value="2nd dose completed" my={1}>
       {SECONDDOSE}
      </Radio>
      <Radio  value="Booster dose completed" my={1}>
       {BOOSTERDOSE}
      </Radio>
    </Radio.Group>
    </Box>
    <Button mt="10" onPress={Update}>{UPDATE}</Button>
    </Center>
       </NativeBaseProvider>
    )
}

export default Vaccination;