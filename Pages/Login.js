import React, { useState, useEffect } from 'react';

import { Ionicons } from '@expo/vector-icons';

import * as WebBrowser from 'expo-web-browser';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
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
            <Image source={require('../assets/images/a1.png')} />
            <View style={styles.container}>

                <Text style={styles.IntroText}>
                    Learn to <Text style={styles.highlight}>code</Text>, build
                    <Text style={styles.highlight}> impactful projects</Text>, and
                    earn <Text style={styles.highlight}>certifications</Text> with CydexCode
                </Text>
                <Text style={{ textAlign: 'center', marginTop: 80, fontSize: 17 }}>
                    Login/Signup
                </Text>
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
        paddingTop: 40,
        marginTop: -20,
        backgroundColor: '#fff',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingBottom: 150,
    },
    WelcomeText: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    IntroText: {
        fontSize: 25,
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
        padding: 10,
        margin: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
});
