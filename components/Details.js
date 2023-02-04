import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import colors from '../assets/colors/colors';
import { TouchableOpacity } from 'react-native';
import Entypo from "react-native-vector-icons/Entypo";


const height = Dimensions.get('window').height;

const Details = ({ route, navigation }) => {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <ImageBackground
        source={item.imageBig} style={styles.backgroundImage} >
        <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
          <Entypo name='chevron-left' size={32} color={colors.white} />
        </TouchableOpacity>
        <View style={styles.titleWrapper}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <View style={styles.locationWrapper}>
            <Entypo name='location-pin' size={24} color={colors.white} />
            <Text style={styles.locationText}>{item.location}</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.descriptionsWrapper}>
        <View style={styles.heartWrapper}>
          <Entypo name='heart' size={32} color={colors.orange} />
        </View>
        <View style={styles.descriptionsTextWrapper}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>{item.description}</Text>
        </View>
        <View style={styles.infoWrapper}>
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>PRICE</Text>
            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoText}>₹{item.price}</Text>
              <Text style={styles.infoSubText}>/person</Text>
            </View>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>RATING</Text>
            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoText}>{item.rating}</Text>
              <Text style={styles.infoSubText}>/5</Text>
            </View>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>DURATION</Text>
            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoText}>{item.duration}</Text>
              <Text style={styles.infoSubText}> hours</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => alert('You booked a trip!')}>
          <Text style={styles.buttonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop : 30,
    backgroundColor: colors.white
  },
  backgroundImage: {
    height: height * 0.55,
    justifyContent: 'space-between'
  },
  descriptionsWrapper: {
    // height : ,
    flex: 1,
    backgroundColor: colors.white,
    marginTop: -20,
    borderRadius: 30
  },
  backIcon: {
    marginLeft: 20,
    marginTop: 60
  },
  titleWrapper: {
    marginHorizontal: 20,
    marginBottom: 40
  },
  itemTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 32,
    color: colors.white,
    fontWeight: 'bold'
  },
  locationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5
  },
  locationText: {
    // fontFamily: 'Lato-Bold',
    fontSize: 16,
    color: colors.white,
  },
  descriptionsWrapper: {

  },
  heartWrapper: {
    position: 'absolute',
    right: 40,
    top: -15,
    width: 64,
    height: 64,
    backgroundColor: colors.white,
    borderRadius: 64,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  descriptionsTextWrapper: {
    marginTop: 30,
    marginHorizontal: 20
  },
  descriptionTitle: {
    fontSize: 24,
    color: colors.black,
    fontWeight: 'bold'
  },
  descriptionText: {
    fontSize: 16,
    marginTop: 20,
    color: colors.darkGray,
    fontWeight: 'bold',
    height: 85
  },
  infoWrapper: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 20,
    justifyContent: 'space-between',
  },
  infoItem: {},
  infoTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 12,
    color: colors.gray,
  },
  infoTextWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 5,
  },
  infoText: {
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    color: colors.orange,
  },
  infoSubText: {
    fontFamily: 'Lato-Bold',
    fontSize: 14,
    color: colors.gray,
  },
  buttonWrapper: {
    marginHorizontal: 20,
    marginTop: 40,
    backgroundColor: colors.orange,
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    color: colors.white,
  },
})
export default Details