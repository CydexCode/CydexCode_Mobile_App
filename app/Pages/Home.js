import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useUser, useClerk } from '@clerk/clerk-expo';
import WelcomeHeader from '../Components/WelcomeHeader'

export default function Home() {
  const { signOut } = useClerk();
  
  return (
    <View>
      
      <WelcomeHeader/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    marginTop: -20,
    backgroundColor: '#fff',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingBottom: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  WelcomeText: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
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




//<TouchableOpacity style={styles.button} onPress={() => signOut()}>
//<Text style={styles.buttonText}>Log Out</Text> 
//</TouchableOpacity>