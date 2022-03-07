import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  FlatList,
  Button,
} from 'react-native';

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calls: [
        {
          id: 1,
          name: 'Bat Man',
          status: 'active',
          image: 'https://bootdey.com/img/Content/avatar/avatar7.png',
        },
        {
          id: 2,
          name: 'Super Man',
          status: 'active',
          image: 'https://bootdey.com/img/Content/avatar/avatar6.png',
        },
        {
          id: 3,
          name: 'Iron Man',
          status: 'active',
          image: 'https://bootdey.com/img/Content/avatar/avatar4.png',
        },
      ],
    };
  }

  renderItem = ({ item }) => {
    return (
      <View>
        <View style={styles.row}>
          <Image source={{ uri: item.image }} style={styles.pic} />
          <View>
            <View style={styles.nameContainer}>
              <Text
                style={styles.nameTxt}
                numberOfLines={1}
                ellipsizeMode="tail">
                {item.name}{' '}
              </Text>
              <Text
                style={styles.mblTxt}
                onPress={() => Alert.alert('Click Below to get my contacts')}>
                Mobile
              </Text>
            </View>
            <View style={styles.msgContainer}>
              <Text style={styles.msgTxt}>{item.status}</Text>
            </View>
          </View>
        </View>
        <View style={styles.btn}>
          <Button
            title="My contact ?"
            onPress={() => Alert.alert(' MY Contact:9999999999')}></Button>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          extraData={this.state}
          data={this.state.calls}
          keyExtractor={item => {
            return item.id;
          }}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'white',
    backgroundColor: 'skyblue',
    borderBottomWidth: 10,
    padding: 30,
    borderTopWidth: 10,
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 280,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: 'red',
    fontSize: 18,
    width: 170,
  },
  mblTxt: {
    fontWeight: '300',
    color: '#777',
    fontSize: 16,
  },
  msgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  msgTxt: {
    fontWeight: '400',
    color: '#008B8B',
    fontSize: 12,
    marginLeft: 15,
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Contacts;