import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  StatusBar,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import items from '../../assets/items';
import CardView from '../../component/CardView';
const Home = () => {
  return (
    <View style={styles.rootContainer}>
      <StatusBar backgroundColor="white" />
      <View style={styles.poll}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>ALL POLLS</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.view1}></View>
          <View style={styles.view2}></View>
          <View style={styles.view3}></View>
          <Text style={{fontSize: 25}}>My Polls</Text>
        </View>
      </View>
      <View style={styles.search}>
        <FontAwesome name="search" />
        <TextInput placeholder="Search here ...." />
      </View>
      <View style={{height: '84%'}}>
        <FlatList
          data={items}
          renderItem={({item}) => <CardView item={item} />}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: 'white',
    // flex: 1,
  },
  secondroot: {
    margin: 10,
    padding: 10,
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    height: 40,
    width: '100%',
    // overflow: 'hidden',
    paddingHorizontal: 20,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.8,
    shadowRadius: 7.49,
    borderRadius: 20,
    elevation: 5,
    marginBottom: 10,
  },
  input: {
    flex: 1,
  },
  view3: {
    height: 15,
    width: 6,
    backgroundColor: 'black',
    borderRadius: 3,
    marginRight: 8,
    marginTop: 5,
  },
  view2: {
    height: 20,
    width: 6,
    backgroundColor: 'black',
    borderRadius: 3,
    marginRight: 3,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 2,
    margin: 10,
    borderRadius: 20,
    elevation: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  view1: {
    height: 15,
    width: 6,
    backgroundColor: 'black',
    borderRadius: 3,
    marginRight: 3,
    marginTop: 5,
  },
  poll: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});
