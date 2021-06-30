import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CardView from './src/component/CardView';
import Home from './src/screen/Home/home';
// import CardView from './src/component/CardView';

const App = () => {
  return (
    <View>
      {/* <CardView /> */}
      <Home />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
