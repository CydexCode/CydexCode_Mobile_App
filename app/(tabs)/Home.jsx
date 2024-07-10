
import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useUser, useClerk } from '@clerk/clerk-expo';
import WelcomeHeader from '../../Components/HomeScreen/WelcomeHeader.js'
import SearchBar from '../../Components/HomeScreen/SerchBar.js';
import Header from '../../Components/HomeScreen/Header.js';


export default function Home() {
  const { signOut } = useClerk();

  return (
    <View style={{ padding: 20, backgroundColor:'#32CD32',height:150 }}>
  
      <WelcomeHeader />
      <SearchBar />

   


    </View>
  )
}

const styles = StyleSheet.create({


  button: {
    marginTop: 500,
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

  //  <TouchableOpacity style={styles.button} onPress={() => signOut()}>
  //       <Text style={styles.buttonText}>Log Out</Text>
  //     </TouchableOpacity>