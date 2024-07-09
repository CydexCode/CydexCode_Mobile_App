import Login from "../Pages/Login";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { Stack } from "expo-router";
import { Text,View, StyleSheet, Platform } from 'react-native';

export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <SignedIn>
      <Stack screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen name="{tabs}" />
      
    </Stack>
      </SignedIn>
     <SignedOut>
           <Login/>
     </SignedOut>
    </ClerkProvider>
  );
}
