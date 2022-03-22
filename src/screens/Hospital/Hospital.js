import React from 'react';
import { View, Text, FlatList, TouchableOpacity} from 'react-native';
import { Data } from '../../inputs/Data';
import { styles } from './styles';
import { userValue } from '../../redux/reducer/UserReducer';
import { useSelector } from 'react-redux';


const Hospital = () => {

  const user = useSelector(userValue);

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
      <View style={{ paddingTop: 30 }}>
        <Text style={{ fontSize: 40 }}>
          {user}
        </Text>
      </View>
      <View>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      </View>
    </View>
  );
}

export default Hospital;