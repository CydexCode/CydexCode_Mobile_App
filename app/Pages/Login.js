import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../Shared/Colors.js'
import { Ionicons } from '@expo/vector-icons';

export default function Login() {
    return (
        <View>
            <Image source={require('../../assets/images/cydexcodeLogo.png')} />
            <View style={styles.container}>
                <Text style={styles.WelcomeText}>Welcome to CydexCode</Text>
                <Text style={{ textAlign: 'center', marginTop: 80, fontSize: 20 }}>
                    Login/Signup
                </Text>
                <View style={styles.button}>
                <Ionicons name="logo-google" size={24} color="white" style={{marginRight:10}} />
                    <Text style={{color:'#fff'}}>Sign In with Google</Text>
                </View>
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
        backgroundColor:'#32CD32',
        padding: 10,
        margin: 30,
        display:'flex',
        flexDirection:'row',
       justifyContent: 'center',
       alignItems:'center',
       borderRadius:10,
    }



})