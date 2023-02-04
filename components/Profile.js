import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native'
import React from 'react';
import beach from '../assets/images/beach.png';
import profile from '../assets/images/person.png';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../assets/colors/colors'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const Profile = (props) => {
  return (
    <View style={styles.container} >
      <View style={styles.backgroundImageWrapper}>
        <ImageBackground source={beach} style={styles.bgImage}>
          <Text>BG </Text>
        </ImageBackground>
      </View>
      <View style={styles.profileImageWrapper}>
        <Image source={profile} style={styles.profileImage} />
      </View>
      <View style={styles.aboutWrapper}>
        <View style={styles.nameWrapper}>
          <Text style={styles.name}>Manish Kumar Pandit</Text>
        </View>
        <View style={styles.bioWrapper}>
          <Text style={styles.bio}>Love swimming , Technovert</Text>
        </View>
      </View>
      <View style={styles.statsWrapper}>
        <View style={styles.placesWrapper}>

          <Text style={styles.placesText}><MaterialIcons name='place' size={28} color={'black'} /> Visited</Text>
          <Text style={styles.placesCnt} >16</Text>
        </View>
        <View style={styles.placesWrapper}>
          <View>
            <Text style={styles.placesText}>
              <Entypo name='heart' size={28} color={'red'} />
              Liked
            </Text>
          </View>
          <View>
            <Text style={styles.placesCnt}>16</Text>
          </View>
        </View>
      </View>

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImageWrapper: {
    width: '100%',
    height: '45%',
    alignItems: 'center'
  },
  bgImage: {
    width: '100%',
    height: '100%',
  },
  profileImageWrapper: {
    marginTop: -100,
    alignItems: 'center'
  },
  profileImage: {
    width: 180,
    height: 180,
    borderRadius: 90
  },
  aboutWrapper: {
    borderWidth: 1,
    borderColor: colors.gray,
    padding: 5,
    margin: 4
  },
  nameWrapper: {
    alignItems: 'center',
    margin: 2
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  bioWrapper: {
    alignItems: 'center',
  },
  bio: {
    fontSize: 16
  },
  statsWrapper: {

    margin: 4,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  placesWrapper: {
    flexDirection: 'column',
    // borderLeftWidth : 2
    borderWidth: 1,
    borderColor: colors.gray,
    padding: 5,
    width: '50%',
    padding: 4,
    alignItems: 'center'

  },
  placesText: {
    fontSize: 16,
    // flex : 'row
    justifyContent: 'center',
    alignItems: 'center'
  },
  placesCnt: {
    fontSize: 28
  }
})

export default Profile