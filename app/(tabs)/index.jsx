import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import Login from '../Pages/Login.js';

import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import ClerkProvider from '@clerk/clerk-expo/dist/ClerkProvider';
import TabNavigation from '../Navigations/TabNavigation.js';
import NavigationContainer from '@react-navigation/native';

export default function HomeScreen() {
  return (
    // <View>
    //   <Login />
    // </View>

    <ClerkProvider publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <SignedIn>
        <NavigationContainer>
          <TabNavigation />
        </NavigationContainer>
      </SignedIn>
      <SignedOut>
        <Login />
      </SignedOut>


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
