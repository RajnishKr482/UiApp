import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const CardView = ({item}) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <View style={styles.root}>
      <View
        style={{
          backgroundColor: item.Color,
          height: 65,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          borderRadius: 15,
          elevation: 10,
        }}>
        <View
          style={{
            backgroundColor: item.rgbaColor,
            height: 50,
            width: 50,
            borderRadius: 10,
            alignItems: 'center',
          }}>
          <Image
            source={item.Image}
            style={{height: 45, width: 50, resizeMode: 'stretch'}}
          />
        </View>
        <Text>{item.title}</Text>
        <TouchableOpacity onPress={() => setIsSelected(!isSelected)}>
          <View
            style={{
              height: 25,
              width: 55,
              backgroundColor: isSelected ? item.Color : 'dodgerblue',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#d6c0bf',
            }}>
            <Text>Join</Text>
          </View>
        </TouchableOpacity>
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
