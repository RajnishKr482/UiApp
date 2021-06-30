import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TextInput,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Card} from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';

const HomeDetailed = () => {
  const [toggleBox, setToggleBox] = useState(false);
  return (
    <View style={{padding: 10, backgroundColor: 'white', height: '100%'}}>
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
      <ScrollView>
        <View>
          <View style={[{backgroundColor: '#abc6eb'}, styles.card]}>
            <Text style={styles.font}>What you choose to fit ?</Text>
            <View style={{flexDirection: 'row'}}>
              <View style={[{backgroundColor: '#cbf5d4'}, styles.green]}>
                <Image
                  style={{height: 50, width: 50}}
                  source={require('../../assets/pic/honey.png')}
                />
                <CheckBox
                  tintColor="black"
                  boxType="circle"
                  value={toggleBox}
                  onValueChange={() => setToggleBox(!toggleBox)}
                />
              </View>
              <View style={[{backgroundColor: '#7be091'}, styles.green]}>
                <Image
                  style={{height: 50, width: 50}}
                  source={require('../../assets/pic/suger.png')}
                />
                <CheckBox
                  tintColor="black"
                  boxType="circle"
                  value={toggleBox}
                  onValueChange={() => setToggleBox(!toggleBox)}
                />
              </View>
            </View>
          </View>
          <View style={[{backgroundColor: '#d7e8fa'}, styles.card]}>
            <Text style={styles.font}>What Product have more protien?</Text>
            <View style={{flexDirection: 'row'}}>
              <View style={[{backgroundColor: '#99bbeb'}, styles.green]}>
                <Image
                  style={{height: 50, width: 50}}
                  source={require('../../assets/pic/apple.png')}
                />
                <CheckBox
                  tintColor="black"
                  boxType="circle"
                  value={toggleBox}
                  onValueChange={() => setToggleBox(!toggleBox)}
                />
              </View>
              <View style={[{backgroundColor: '#7ca9e6'}, styles.green]}>
                <Image
                  style={{height: 50, width: 50}}
                  source={require('../../assets/pic/igg.png')}
                />
                <CheckBox
                  tintColor="black"
                  boxType="circle"
                  value={toggleBox}
                  onValueChange={() => setToggleBox(!toggleBox)}
                />
              </View>
            </View>
          </View>
          <View style={[{backgroundColor: '#e7ead9'}, styles.card]}>
            <Text style={styles.font}>What you choose to fit ?</Text>
            <View style={{flexDirection: 'row'}}>
              <View style={[{backgroundColor: '#cbf5d4'}, styles.green]}>
                <Image
                  style={{height: 50, width: 50}}
                  source={require('../../assets/pic/honey.png')}
                />
                <CheckBox
                  tintColor="black"
                  boxType="circle"
                  value={toggleBox}
                  onValueChange={() => setToggleBox(!toggleBox)}
                />
              </View>
              <View style={[{backgroundColor: '#7be091'}, styles.green]}>
                <Image
                  style={{height: 50, width: 50}}
                  source={require('../../assets/pic/suger.png')}
                />
                <CheckBox
                  tintColor="black"
                  boxType="circle"
                  value={toggleBox}
                  onValueChange={() => setToggleBox(!toggleBox)}
                />
              </View>
            </View>
          </View>
          <View style={[{backgroundColor: '#a8d6cc'}, styles.card]}>
            <Text style={styles.font}>What you choose to fit ?</Text>
            <View style={{flexDirection: 'row'}}>
              <View style={[{backgroundColor: '#d5ecc2'}, styles.green]}>
                <Image
                  style={{height: 50, width: 50}}
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
                  style={{height: 50, width: 50}}
                  source={require('../../assets/pic/suger.png')}
                />
                <CheckBox
                  tintColor="black"
                  boxType="circle"
                  value={toggleBox}
                  onValueChange={() => setToggleBox(!toggleBox)}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeDetailed;

const styles = StyleSheet.create({
  card: {
    height: 200,
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
    borderRadius: 20,
    justifyContent: 'center',
    paddingHorizontal: 40,
    alignItems: 'center',
    // flexDirection: 'row',
  },
  whiteblueContainer: {
    height: 100,
    width: 120,
    borderRadius: 10,
    // backgroundColor: '#cbf5d4',
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
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
    marginBottom: 20,
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
