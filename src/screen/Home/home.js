import React from 'react';
import {StyleSheet, Text, View, FlatList, TextInput} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import items from '../../assets/items';
import CardView from '../../component/CardView';
const Home = () => {
  // const CardView = item => {
  //   return (
  //     <View
  //       style={{
  //         height: 30,
  //         width: '100%',
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //       }}>
  //       <Text>{item.color}</Text>
  //     </View>
  //   );
  // };
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          // borderWidth: 2,
          margin: 10,
          borderRadius: 20,
          elevation: 10,
          paddingHorizontal: 20,
          backgroundColor: 'white',
        }}>
        <FontAwesome name="search" />
        <TextInput placeholder="Search here ...." />
      </View>
      <View style={{height: '90%'}}>
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
});
