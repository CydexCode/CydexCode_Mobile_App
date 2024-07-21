
import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity ,ScrollView } from 'react-native';
import { useUser, useClerk } from '@clerk/clerk-expo';
import WelcomeHeader from '../../Components/HomeScreen/WelcomeHeader'
import SearchBar from '../../Components/HomeScreen/SerchBar.js';
import Header from '../../Components/HomeScreen/Header.js';
import CourseList from '../../Components/HomeScreen/CourseList.js';

import CourseProgress from '../../Components/HomeScreen/CourseProgress.js'
import Colors from '../../Colors/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Home() {

  return (
    <ScrollView>
      <View style={{ padding: 15, backgroundColor:Colors.PRIMARY2, height: 120, marginBottom: 30 }}>

        <WelcomeHeader />
        <SearchBar />


      </View>
      <View>
        <View style={{ padding: 10 }}>
        <CourseProgress  />
          <CourseList level='Basic' />

        </View>
        <View style={{ padding: 10 }}>

          <CourseList level='Advance' />
        </View>

      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({


  button: {
    marginTop: 20,
    backgroundColor: '#32CD32',
    padding: 10,
    margin: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },

  socialMedia: {
    marginTop: 20,
    alignItems: 'center',
},
socialMediaIcons: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'space-around',
    width: '80%',
},

});

