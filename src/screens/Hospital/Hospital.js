import React from 'react';
import { View, Text,  FlatList ,TouchableOpacity} from 'react-native';

import { Data } from '../../inputs/Data';
import { styles } from './styles';




const Hospital = () => {


  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.item}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.contact}>Contact Number-  {item.cont_Number}</Text>
          <Text style={styles.address}>Address-  {item.address}</Text>
        </View>


      </TouchableOpacity>
    </View>

  );

  return (
    <View style={styles.container}>

      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

    </View>
  );
}

export default Hospital;



//styles------



