import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Colors/Colors'
import { useUser } from "@clerk/clerk-expo";
import WelcomeHeaderProfile from '../../Components/HomeScreen/WelcomeHeaderProfile';

export default function ProfileScreen() {
  return (
    <View>
      <View style={{
        height: 180, backgroundColor: '#32CD32',
        padding: 30,
      }}>
        <Text style={{
          fontFamily: 'outfit-bold', paddingTop: 40,
          color: Colors.WHITE,
          fontSize: 30
        }}>ProfileScreen</Text>
      </View>

     <WelcomeHeaderProfile/>


      <TouchableOpacity style={styles.button} onPress={() => signOut()}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>

    </View>
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

