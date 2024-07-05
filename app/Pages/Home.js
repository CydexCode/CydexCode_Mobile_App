import React, { useState, useEffect } from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Home() {
    

    return (
        <View>
            <Image source={require('../../assets/images/cydexcodeLogo.png')} />
            <View style={styles.container}>
                <Text style={styles.WelcomeText}>Welcome to CydexCode</Text>
              
                
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
