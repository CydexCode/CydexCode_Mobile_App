import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function About() {
    return (
        <View style={styles.Container}>
            <View style={styles.socialMedia}>
                <Text style={styles.text}>Follow CydexCode for more Tutorials</Text>
                <View style={styles.socialMediaIcons}>
                    <TouchableOpacity onPress={() => Linking.openURL('https://linkedin.com/in/cydexcode')}>
                        <Icon name="linkedin" size={30} color="#0e76a8" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL('https://medium.com/cydexcode')}>
                        <Icon name="medium" size={30} color="#3b5998" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL('https://facebook.com/cydexcode')}>
                        <Icon name="facebook" size={30} color="#3b5998" />
                    </TouchableOpacity>
                  
                    <TouchableOpacity onPress={() => Linking.openURL('https://instagram.com/cydexcode')}>
                        <Icon name="instagram" size={30} color="#C13584" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL('https://github.com/cydexcode')}>
                        <Icon name="github" size={30} color="#333" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL('https://t.me/CydexCode_Academy')}>
                        <Icon name="telegram" size={30} color="#0088cc" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>                
    )
}

const styles = StyleSheet.create({

    Container: {

        backgroundColor: '#FFFFFF', // White background color
        padding: 20,                // Padding inside the box
        margin: 0,                 // Margin outside the box
        borderRadius: 10,           // Rounded corners for the box
        shadowColor: '#000000',     // Shadow color
        shadowOffset: { width: 0, height: 2 }, // Shadow offset
        shadowOpacity: 0.1,         // Shadow opacity
        shadowRadius: 5,            // Shadow radius
        elevation: 5,               // Elevation for Android shadow
        alignItems: 'center',       // Center content horizontally
    },
    text: {
        fontSize: 16,               // Font size for the text
        textAlign: 'center',        // Center text horizontally
        marginBottom: 10,           // Space between text and icons
    },
    socialMedia: {
        width: '100%',              // Full width inside the container
        alignItems: 'center',       // Center content horizontally
    },
    socialMediaIcons: {
        flexDirection: 'row',       // Row direction for icons
        marginTop: 10,              // Margin above icons
        justifyContent: 'space-around', // Space out icons
        width: '80%',               // Width of the icons container
    },
});