import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Avatar} from 'react-native-paper';
// import {Picker} from '@react-native-picker/picker';
// import DropDownPicker from 'react-native-dropdown-picker';

const ThirdScreen = () => {
  const [toggleBox, setToggleBox] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Mango', value: 'mango'},
    {label: 'Orange', value: 'orange'},
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  const onNavigate = values => {
    const data = values;
    navigation.navigate('OnNavigate', {value: data});
    setValue(null);
  };
  const Default = 'please select';
  return (
    <View style={styles.root}>
      <StatusBar backgroundColor="#a8d6cc" />
      <View style={[{backgroundColor: '#a8d6cc'}, styles.card]}>
        <Text style={styles.font}>What you choose to fit ?</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={[{backgroundColor: '#d5ecc2'}, styles.green]}>
            <Image
              style={{height: 50, width: 50, borderRadius: 10}}
              source={require('../../assets/pic/honey.png')}
            />
            <CheckBox
              tintColor="black"
              boxType="circle"
              value={toggleBox}
              onValueChange={() => setToggleBox(!toggleBox)}
            />
          </View>
          <View style={[{backgroundColor: '#e7ead9'}, styles.green]}>
            <Image
              style={{height: 50, width: 50, borderRadius: 10}}
              source={require('../../assets/pic/suger.png')}
            />
            <CheckBox
              tintColors="red"
              boxType="circle"
              value={toggleBox}
              onValueChange={() => setToggleBox(!toggleBox)}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          margin: 20,
          backgroundColor: 'white',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Comments</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <FontAwesome name="comment" size={26} />
          <Text style={{fontWeight: 'bold', fontSize: 14, marginLeft: 10}}>
            Write Comments
          </Text>
        </View>
      </View>
      <View
        style={{
          elevation: 10,
          backgroundColor: 'white',
          margin: 10,
          height: 300,
          padding: 10,
        }}>
        <View
          style={{marginLeft: 10, flexDirection: 'row', alignItems: 'center'}}>
          <Avatar.Image
            source={require('../../assets/pic/apple.png')}
            style={{alignSelf: 'center'}}
          />
          <Text style={{marginLeft: 10, fontWeight: 'bold', fontSize: 25}}>
            RAjnish
          </Text>
          {/* <Picker>
            <Picker.Item label="java" value="java" />
          </Picker> */}
        </View>
        <View>{/* <DropDownPicker /> */}</View>
      </View>
    </View>
  );
};

export default ThirdScreen;

const styles = StyleSheet.create({
  root: {
    // flex: 1,
    // backgroundColor: 'red',
    height: '100%',
  },
  card: {
    height: 250,
    // backgroundColor: '#a8d6cc',
    marginBottom: 15,

    elevation: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 7.49,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: 'center',
    paddingHorizontal: 40,
    alignItems: 'center',
    // flexDirection: 'row',
  },
  green: {
    height: 100,
    width: 120,
    // backgroundColor: '#7be091',
    marginRight: 20,
    elevation: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  font: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
