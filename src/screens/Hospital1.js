import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Hospital from './Hospital/Hospital';

const Data = [
    {
      id: '1',
      title: 'Hospital 1',
      cont_Number:"9879077487",
      address:"hjhsdj,djhgdhh,asjdggd,jywgdu-761235"
    },
    {
      id: '2',
      title: 'Hospital 2',
      cont_Number:"9879077487",
      address:"hjhsdj,djhgdhh,asjdggd,jywgdu-761235"
  
    },
    {
      id: '3',
      title: 'Hopital 3',
      cont_Number:"9879077487",
      address:"hjhsdj,djhgdhh,asjdggd,jywgdu-761235"
    },
    {
      id: '4',
      title: 'Hopital 4',
      cont_Number:"9879077487",
      address:"hjhsdj,djhgdhh,asjdggd,jywgdu-761235"
    }, {
      id: '5',
      title: 'Hopital 5',
      cont_Number:"9879077487",
      address:"hjhsdj,djhgdhh,asjdggd,jywgdu-761235"
    }, {
      id: '6',
      title: 'Hopital 6',
      cont_Number:"9879077487",
      address:"hjhsdj,djhgdhh,asjdggd,jywgdu-761235"
    },
  ];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Hospital1 = () => {
  const renderItem = ({ item }) => (
    <View style={styles.container}>
    
      <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.contact}>Contact Number-  {item.cont_Number}</Text>
        <Text style={styles.address}>Address-  {item.address}</Text>
      </View>


    
  </View>
    
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Hospital1;