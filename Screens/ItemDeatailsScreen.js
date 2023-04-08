import { View, Text ,StyleSheet,ScrollView, TouchableOpacity,Image} from 'react-native'
import React ,{useState} from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
const ItemDeatailsScreen = ({route}) => {
    const data = route.params
  
    const [wish, setWish] = useState(false);
    const wishList = () => {
        if (wish === true) {
          setWish(false);
        } else {
          setWish(true);
        }
      };
    
  return (
    <View>
      <View
        style={{backgroundColor: 'white', paddingBottom: 20, height: '100%'}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.mainContainer}>
          <View
            style={{
              alignItems: 'flex-end',
              marginHorizontal: 15,
              marginVertical: 10,
              position: 'absolute',
            }}>
            <TouchableOpacity>
              <AntDesign name="sharealt" size={25} color={'gray'} />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign
                name="shoppingcart"
                size={25}
                color={'gray'}
                style={{marginVertical: 10}}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.picContainer}>
            <Image source={{uri:data.Image}} style={{height: 140, width: 100}} />
          </View>
          <View
            style={{
              height: 100,
              backgroundColor:'grey',
              flexDirection: 'row',
            }}>
            <View style={styles.nameC}>
              <Text style={styles.text1}>{data.Name}</Text>

              <Text style={styles.text2}>Type: {data.Type}</Text>
              <Text style={styles.text2}>Count: {data.Count} </Text>
            </View>
            <View style={styles.ratingC}>
              <TouchableOpacity onPress={wishList}>
                {wish ? (
                  <View>
                    <AntDesign name="heart" size={25} color={'red'} />
                  </View>
                ) : (
                  <View>
                    <AntDesign name="hearto" size={25} color={'gray'} />
                  </View>
                )}
              </TouchableOpacity>
              <Text style={styles.text4}>Rating: {data.Rate} </Text>
            </View>
          </View>
          <View style={{paddingHorizontal: 15, paddingVertical: 20}}>
            <Text style={styles.text3}>DESCRIPTION</Text>
            <Text style={styles.text4}>{data.Des}</Text>
            <Text style={styles.text5}>$ {data.Price}</Text>
          </View>
        </ScrollView>
        <View style={styles.buttonC}>
          <TouchableOpacity style={styles.Button} >
            <Text style={{fontWeight: 'bold', fontSize: 15, color: 'gray'}}>
              Add to Cart
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button2}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 15,
                color: 'white',
              }}>
              Buy Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    
    </View>
  )
}

export default ItemDeatailsScreen
const styles = StyleSheet.create({
    mainContainer: {
      // marginTop:50,
      backgroundColor: 'white',
      height: '90%',
      // marginHorizontal:10,
    },
    textView: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    text1: {
      fontSize: 15,
      fontWeight: 'bold',
      color: 'black',
     
    },
    text3: {
      fontSize: 20,
      // fontWeight:'bold',
      color: 'black',
    },
    picContainer: {
      height: 260,
      // backgroundColor:color.lightGrayColor,
      width: '90%',
      alignSelf: 'center',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 15,
    },
    nameC: {
      height: 120,
      backgroundColor: 'white',
      padding: 5,
      paddingHorizontal: 15,
      width: '65%',
      alignSelf: 'center',
      
     
    },
    ratingC: {
      height: 120,
      backgroundColor: 'white',
      padding: 5,
      paddingHorizontal: 15,
      width: '35%',
      alignSelf: 'center',
      alignItems: 'flex-end',
      paddingVertical: 10,
    },
    text2: {
      fontSize: 15,
      // fontWeight:'bold',
      color: 'grey',
      marginVertical: 2,
    },
    text4: {
      marginVertical: 10,
      fontSize: 15,
      color: 'gray',
    },
    buttonC: {
      backgroundColor: 'white',
      height: 50,
      flexDirection: 'row',
      // marginBottom:150,
  
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 20,
    },
    Button: {
      height: 50,
      width: '45%',
      // backgroundColor:'blue',
      marginHorizontal: 10,
      marginVertical: 20,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'grey',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
    Button2: {
      height: 50,
      width: '45%',
      // backgroundColor:'blue',
      marginHorizontal: 10,
      marginVertical: 20,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'grey',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'green',
      position: 'relative',
    },
    text5: {
      fontSize: 22,
      fontWeight: 'bold',
      color: 'black',
    },
  });
  