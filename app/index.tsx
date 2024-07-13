import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';


import { SignedIn, SignedOut } from "@clerk/clerk-expo";
import { ClerkProvider } from '@clerk/clerk-expo/dist/ClerkProvider';

import { NavigationContainer } from '@react-navigation/native';
import { Redirect } from 'expo-router';
import { useFonts } from 'expo-font';

export default function Index() {
  const [fontsLoaded] = useFonts({
    'outfit': require('../assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold': require('../assets/fonts/Outfit-Bold.ttf'),
    'outfit-medium': require('../assets/fonts/Outfit-SemiBold.ttf'),
  });
  return <Redirect href={'/Home'}/>

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0, // Adjust for Android status bar
    paddingBottom: 0,
  },
});

