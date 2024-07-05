
import { React, useState, useEffect, useContext } from 'react'
import { Colors } from '../Shared/Colors.js'
import { Ionicons } from '@expo/vector-icons';
import * as Google from 'expo-auth-session/providers/google.js';
import * as AuthSession from 'expo-auth-session/providers/google.js';
import * as WebBrowser from 'expo-web-browser';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { AuthContext } from '../Context/AuthContext.js';




export default function Login() {
    WebBrowser.maybeCompleteAuthSession();
    const {userData,setUserData}=useContext(AuthContext);
    const [accessToken, setAccessToken] = useState();
    const [userInfo, setUserInfo] = useState();
    const [request, response, promptAsync] = Google.useAuthRequest({
        androidClientId: '1044958203630-gp648tsk9fk5rvukl724d4354g23fu8s.apps.googleusercontent.com',
        expoClientId: '1044958203630-3raanm52kn828ke27fmj3f99j3ampgcl.apps.googleusercontent.com',

    });

    useEffect(() => {

        if (response?.type == 'success') {
            setAccessToken(response.authentication.accessToken)
            console.log(response.authentication.accessToken)
            getUserData()
        }

    }, [response])

    const getUserData = async () => {
        try {
            const resp = await fetch(
                "https://www.googleapis.com/userinfo/v2/me",
                {
                    headers: { Authorization: `Bearer ${response.authentication.accessToken}` },
                }
            );

            const user = await resp.json();
            console.log("User Detail", user)
            setUserInfo(user);
            setUserData(user);
            await Services.setUserAuth(user)
            //navigation.navigate('Home'); // Navigate to Home page
        } catch (error) {
            //
        }
    }

    return (
        <View>
            <Image source={require('../../assets/images/cydexcodeLogo.png')} />
            <View style={styles.container}>
                <Text style={styles.WelcomeText}>Welcome to CydexCode</Text>
                <Text style={{ textAlign: 'center', marginTop: 80, fontSize: 20 }}>
                    Login/Signup
                </Text>
                <TouchableOpacity style={styles.button}
                    onPress={() => promptAsync()}> 
                   
                    <Ionicons name="logo-google" size={24} color="white" style={{ marginRight: 10 }} />
                    <Text style={{ color: '#fff' }}>Sign In with Google</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
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
    }



})