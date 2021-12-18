import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView , Dimensions , TouchableOpacity , Image } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Slider from '@react-native-community/slider';

const {width , height} = Dimensions.get('window');

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.mainContainer}>
      <View style={styles.artworkWrapper}>
        <Image source={require('../assets/artwork/mohsen-ebrahimzadeh-delam-azat-shekaste.jpg')}
        style={styles.artworkImg}
        />
      </View>

      <View>
        <Text style={styles.title}> Song Title </Text>
        <Text style={styles.artist}> Song Atrist </Text>
      </View>

      <View>
        <Slider
          style={styles.progressContainer}
          value={10}
          minimumValue={0}
          maximumValue={100}
          thumbTintColor='#ba30a5'
          minimumTrackTintColor='#FFF'
          maximumTrackTintColor='#1950d1'
          onSlidingComplete={()=>{}}
         />
      
      <View style={styles.progressLabelContainer}>
          <Text style={styles.progressLabelTxt}> 00:00 </Text>
          <Text style={styles.progressLabelTxt}> 03:42 </Text>
      </View>
    </View>

    <View style={styles.musicControlls}>
        <TouchableOpacity onPress={() => {}}>
            <Ionicons name="play-skip-back-outline" size={35} color="#eff222" style={{marginTop:25}}/>
        </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="pause-circle-outline" size={75} color="#eff222"/>
        </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="play-skip-forward-outline" size={35} color="#eff222" style={{marginTop:25}}/>
        </TouchableOpacity>
    </View>
    </View>

    <View style={styles.bottomContainer}>
      <View style={styles.bottomControls}>
        <TouchableOpacity onPress={() => {}}>
            <Ionicons name="heart-outline" size={30} color="#777777"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
            <Ionicons name="repeat" size={30} color="#777777"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
            <Ionicons name="share-outline" size={30} color="#777777"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
            <Ionicons name="ellipsis-horizontal-outline" size={30} color="#777777"/>
        </TouchableOpacity>
      </View>
    
    </View>
       
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#151c26'
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
     borderTopColor: '#ababab',
        borderTopWidth: 1,
        width: width,
        alignItems: 'center',
        paddingVertical: 15
  },
  bottomControls: {
  flexDirection:'row' ,
  justifyContent:'space-between' ,
  width: '80%'
  },

  artworkWrapper: {
    width: 300,
    height: 300,
    marginBottom: 25,
    // Only for IOS
    // shadowColor: '#ccc',
    // shadowOffset: {
    //   width: 5,
    //   height: 5,
    // },
    // shadowOpacity: 0.5,
    // shadowRadius: 3.9,

    // elevation: 5,
  },
  artworkImg: {
    width: '100%',
    height: '100%',
    borderRadius: 15
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
    color: '#EEEE'
  },
  artist: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '200',
    color: '#EEEE'
  },
  progressContainer: {
    width: 350,
    height: 40,
    marginTop: 25,
    flexDirection:'row'
  },
  progressLabelContainer: {
    width: 340,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  progressLabelTxt: {
    color: '#fff'
  },
  musicControlls:{
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-between',
    marginTop: 15
  }


  
});
