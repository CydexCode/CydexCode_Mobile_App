import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import Login from '../Pages/Login.js';
import Home from '../Pages/Home.js';

import { SignedIn, SignedOut } from "@clerk/clerk-expo";
import { ClerkProvider } from '@clerk/clerk-expo/dist/ClerkProvider';
import TabNavigation from '../Navigations/TabNavigation.js';
import { NavigationContainer } from '@react-navigation/native';

export default function HomeScreen() {
  return (

    <ClerkProvider publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <View style={styles.container}>
        <SignedIn>
   <Home/>
          <NavigationContainer independent={true}>
            <TabNavigation />
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <Login />
        </SignedOut>
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0, // Adjust for Android status bar
  },
});
