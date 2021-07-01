import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CardView from './src/component/CardView';
import Home from './src/screen/Home/home';
// import CardView from './src/component/CardView';
import HomeDetailed from './src/screen/Home/HomeDetailed';
import ThirdScreen from './src/screen/Home/ThirdScreen';

const App = () => {
  return (
    <View>
      {/* <CardView /> */}
      {/* <Home /> */}
      {/* <HomeDetailed /> */}
      <ThirdScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
