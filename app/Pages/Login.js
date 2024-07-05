import React, { useState, useEffect } from 'react';
import { Colors } from '../Shared/Colors.js';
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

    // const [accessToken, setAccessToken] = useState();
    // const [userInfo, setUserInfo] = useState();

    // const [request, response, promptAsync] = Google.useAuthRequest({
    //     androidClientId: '1044958203630-kjabn0mkche4nkalb5l1sj06c3heu2eq.apps.googleusercontent.com',
    //     expoClientId: '1044958203630-f5kbg4f4a6ksim9q88rndi41i5ei6nko.apps.googleusercontent.com',
    //     redirectUri: AuthSession.makeRedirectUri({
    //         useProxy: true,
    //     }),
    // });

    // useEffect(() => {
    //     if (response?.type === 'success') {
    //         setAccessToken(response.authentication.accessToken);
    //         console.log(response.authentication.accessToken);
    //         getUserData();
    //     }
    // }, [response]);

    // const getUserData = async () => {
    //     try {
    //         const response = await fetch(
    //             'https://www.googleapis.com/userinfo/v2/me',
    //             {
    //                 headers: { Authorization: `Bearer ${accessToken}` },
    //             }
    //         );

    //         const user = await response.json();
    //         console.log('User Detail', user);
    //         setUserInfo(user);
    //     } catch (error) {
    //         //
    //     }
    // };

    return (
        <View>
            <Image source={require('../../assets/images/cydexcodeLogo.png')} />
            <View style={styles.container}>
                <Text style={styles.WelcomeText}>Welcome to CydexCode</Text>
                <Text style={{ textAlign: 'center', marginTop: 80, fontSize: 20 }}>
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
