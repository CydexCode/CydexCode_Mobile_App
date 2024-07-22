import Login from "../Pages/Login";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreenNavigation } from "../Navigations/HomeScreenNavigation";
import { Stack } from "expo-router";
import { Text, View, StyleSheet, Platform } from 'react-native';
import Home from "./(tabs)/Home"
import { useFonts } from 'expo-font';
import { CompleteChapterContext } from './Context/CompleteChapterContext';
import { useState } from "react";

const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function RootLayout() {

  const [isChapterComplete, setIsChapterComplete] = useState(false);

  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>

      <CompleteChapterContext.Provider value={{ isChapterComplete, setIsChapterComplete }}>
        <View style={styles.container}>
          <SignedIn>

            <Stack screenOptions={{
              headerShown: false
            }}>
              <Stack.Screen name="{tabs}" />

            </Stack>

          </SignedIn>
          <SignedOut>

            <Login />

          </SignedOut>

        </View>
      </CompleteChapterContext.Provider>
    </ClerkProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    marginTop:37
   
  },
});