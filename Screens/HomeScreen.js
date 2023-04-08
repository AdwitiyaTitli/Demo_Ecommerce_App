import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TextInput} from 'react-native-gesture-handler';
import ItemDeatailsScreen from './ItemDeatailsScreen';
const HomeScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [oldData, setOldData] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(response => {
        setData(response);
        setOldData(response);
      });
  }, []);

  const OnSearch = text => {
    if (text === '') {
      setData(oldData);
    } else {
      let tempList = data.filter(item => {
        return item.title.toLowerCase().indexOf(text.toLowerCase()) > -1;
      });
      setData(tempList);
    }
  };
  return (
    <ScrollView>
      <View style={styles.firstContainer}>
        <TouchableOpacity>
          <Entypo name="menu" size={24} color={'gray'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="bell" size={24} color={'gray'} />
        </TouchableOpacity>
      </View>
      <View style={styles.SecondContainer}>
        <TextInput
          placeholder="seach something"
          placeholderTextColor={'grey'}
          style={styles.search}
          onChangeText={text => {
            OnSearch(text);
          }}
        />
        <TouchableOpacity>
          <Feather name="search" size={18} color={'gray'} />
        </TouchableOpacity>
      </View>

      {data.map((item, index) => {
        return (
          <ScrollView style={styles.ThirdContainer}>
            <TouchableOpacity
              style={styles.itemBox}
              onPress={() => {
                navigation.navigate('ItemDeatailsScreen', {
                  Id: item.id,
                  Name: item.title,
                  Des: item.description,
                  Rate: item.rating.rate,
                  Price: item.price,
                  Type: item.category,
                  Count: item.rating.count,
                  Image: item.image,
                });
              }}>
              <View style={styles.imageBox}>
                <Image
                  source={{uri: item.image}}
                  style={{height: 95, width: 70}}
                />
              </View>
              <View style={styles.itemdetails}>
                <View>
                  <Text style={styles.title}>{item.title}</Text>
                </View>
                <View style={{flexDirection: 'row', marginVertical: 10}}>
                  <View>
                    <Text style={styles.price}>$ {item.price}</Text>
                  </View>

                  <View style={styles.rateView}>
                    <Text style={styles.rate}>{item.rating.rate}</Text>
                    <AntDesign name="star" size={20} color={'#FFCC00'} />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
        );
      })}
    </ScrollView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  firstContainer: {
    height: 50,
    marginHorizontal: 15,
    flexDirection: 'row',
    paddingVertical: 5,
    justifyContent: 'space-between',
  },
  SecondContainer: {
    marginHorizontal: 5,
    height: 50,
    width: '90%',
    borderRadius: 50,
    borderWidth: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  search: {
    height: 50,
    width: '90%',
    borderRadius: 50,
    paddingHorizontal: 20,
    color: 'grey',
  },
  ThirdContainer: {
    marginVertical: 5,
  },
  itemBox: {
    height: 120,
    width: '100%',
    // justifyContent:'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  imageBox: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemdetails: {
    width: '70%',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  title: {
    color: 'black',
    fontSize: 12,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
  },
  rateView: {
    width: '50%',
    height: 30,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  rate: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFCC00',
  },
});
