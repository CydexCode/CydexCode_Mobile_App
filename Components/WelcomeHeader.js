import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { useUser } from "@clerk/clerk-expo";

export default function WelcomeHeader() {
    const { isLoaded, isSignedIn, user } = useUser();

    if (!isLoaded || !isSignedIn) {
        return null;
    }

    // console.log('User Profile Image URL:', user?.picture); // Debugging

    return (
        <View style={styles.Container}>
            <View>
                <Text style={styles.greetingText}>Hello</Text>
                <Text style={styles.userName}>{user?.firstName}</Text>
            </View>
            <Image
                source={{ uri: user?.picture }}
                style={styles.profileImage}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,

    },
    greetingText: {
        fontSize: 15,
        color: '#333',
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 100,
        marginLeft: 10,
    },
});
