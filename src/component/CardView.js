import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CardView = ({item}) => {
  const [state, setstate] = useState(item.Color);

  return (
    <View style={styles.root}>
      <View style={{backgroundColor: item.Color, height: 65, width: '100%'}}>
        <Text>{item.title}</Text>
      </View>
    </View>
  );
};

export default CardView;

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    backgroundColor: 'white',
  },
  secondRoot: {
    //backgroundColor: 'orange',
    flexDirection: 'row',
    height: 65,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.8,
    shadowRadius: 7.49,
    borderRadius: 10,
    elevation: 10,
  },
});
