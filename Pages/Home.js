import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useUser, useClerk } from '@clerk/clerk-expo';
import WelcomeHeader from '../Components/WelcomeHeader.js'
import SearchBar from '../Components/SerchBar.js';
import TabNavigation from '../Navigations/TabNavigation'

export default function Home() {
    const { signOut } = useClerk();

    return (
        <View style={{ padding: 20 }}>

            <WelcomeHeader />
            <SearchBar />

            <TouchableOpacity style={styles.button} onPress={() => signOut()}>
                <Text style={styles.buttonText}>Log Out</Text>
            </TouchableOpacity>


        </View>
    );
}

const styles = StyleSheet.create({


    button: {
        marginTop: 500,
        backgroundColor: '#32CD32',
        padding: 10,
        margin: 30,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 19,
    },
});




//<TouchableOpacity style={styles.button} onPress={() => signOut()}>
//<Text style={styles.buttonText}>Log Out</Text>
//</TouchableOpacity>