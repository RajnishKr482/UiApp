import React from 'react';
import {StyleSheet, Text, View, FlatList, TextInput} from 'react-native';

const Home = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.secondroot}>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Search" />
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  secondroot: {
    margin: 10,
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    height: 40,
    width: '100%',
    overflow: 'hidden',
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
  },
});
