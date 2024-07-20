
import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity ,ScrollView } from 'react-native';
import { useUser, useClerk } from '@clerk/clerk-expo';
import WelcomeHeader from '../../Components/HomeScreen/WelcomeHeader.js'
import SearchBar from '../../Components/HomeScreen/SerchBar.js';
import Header from '../../Components/HomeScreen/Header.js';
import CourseList from '../../Components/HomeScreen/CourseList.js';

import CourseProgress from '../../Components/HomeScreen/CourseProgress.js'


export default function Home() {
  const { signOut } = useClerk();

  return (
    <ScrollView>
      <View style={{ padding: 15, backgroundColor: '#32CD32', height: 160, marginBottom: 30 }}>

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

      <TouchableOpacity style={styles.button} onPress={() => signOut()}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
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
});

