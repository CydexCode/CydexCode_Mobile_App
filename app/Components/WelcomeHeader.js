import { View, Text } from 'react-native'
import React from 'react'
import { useAuth } from "@clerk/clerk-expo";
import { useUser } from "@clerk/clerk-expo";

export default function WelcomeHeader() {

    const { isLoaded, isSignedIn, user } = useUser();

    if (!isLoaded || !isSignedIn) {
        return null;
    }


    return (
        <View>
            <View>
            <Text>Hello</Text>
            <Text>{user.firstName}</Text>
        </View>
    </View >
  )
}