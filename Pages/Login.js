import React, { useState, useEffect } from 'react';

import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useOAuth } from "@clerk/clerk-expo";
import * as Linking from "expo-linking"
import { Link } from "expo-router";

WebBrowser.maybeCompleteAuthSession();

export const useWarmUpBrowser = () => {
    React.useEffect(() => {
        // Warm up the android browser to improve UX
        // https://docs.expo.dev/guides/authentication/#improving-user-experience
        void WebBrowser.warmUpAsync();
        return () => {
            void WebBrowser.coolDownAsync();
        };
    }, []);
};

export default function Login() {
    useWarmUpBrowser();

    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

    const onPress = React.useCallback(async () => {
        try {
            const { createdSessionId, signIn, signUp, setActive } =
                await startOAuthFlow();

            if (createdSessionId) {
                setActive({ session: createdSessionId });
            } else {
                // Use signIn or signUp for next steps such as MFA
            }
        } catch (err) {
            console.error("OAuth error", err);
        }
    }, []);

    return (
        <View>
            <Image source={require('../assets/images/c1.png')} />

            <View style={styles.container}>
                <Text style={styles.IntroText}>
                    Learn to <Text style={styles.highlight}>code</Text>, build
                    <Text style={styles.highlight}> impactful projects</Text>, and
                    earn <Text style={styles.highlight}>certifications</Text> with CydexCode
                </Text>
                <Text style={{ textAlign: 'center', marginTop: 30, fontSize: 17 }}>
                    Sign in to your account
                </Text>

                {/* Input Fields */}
                <View style={styles.inputContainer}>
                    <FontAwesome name="user" size={24} color="gray" style={styles.icon} />
                    <TextInput
                        placeholder="Username"
                        style={styles.input}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Entypo name="lock" size={24} color="gray" style={styles.icon} />
                    <TextInput
                        placeholder="Password"
                        style={styles.input}
                        secureTextEntry={true}
                    />
                </View>
                <Text style={styles.forgotPassword}>Forgot your password?</Text>

                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Ionicons name="logo-google" size={24} color="white" style={{ marginRight: 10 }} />
                    <Text style={{ color: '#fff' }}>Sign In with Google</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 0,
        marginTop: -20,
        backgroundColor: '#fff',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingBottom: 150,
    },
    image: {
        width: 200, // Set the desired width
        height: 100, // Set the desired height
        resizeMode: 'contain', // Adjust image scaling
    },
    WelcomeText: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    IntroText: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: -20,
        color: '#333',
    },
    highlight: {
        color: '#32CD32',
    },
    button: {
        backgroundColor: '#32CD32',
        padding: 5,
        margin: 40,
        marginTop: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 50,
        paddingHorizontal: 15,
        backgroundColor: '#f9f9f9',
        marginLeft: 10,  
        borderWidth: 0, // Removes the border
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 40,
        borderRadius: 50,
        backgroundColor: '#f9f9f9',
        paddingHorizontal: 10,
        // Shadow for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        // Shadow for Android
        elevation: 5,
    },
    
    
    icon: {
        marginLeft: 5,
    },
    forgotPassword: {
        textAlign: 'right',
        marginBottom: 20,
        marginRight: 40,
    },
});
