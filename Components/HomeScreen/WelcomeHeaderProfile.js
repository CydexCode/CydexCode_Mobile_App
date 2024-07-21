import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useClerk, useUser } from "@clerk/clerk-expo";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function WelcomeHeaderProfile() {
    const { isLoaded, isSignedIn, user } = useUser();

    if (!isLoaded || !isSignedIn) {
        return null;
    }
    const { signOut } = useClerk();

    // console.log('User Profile Image URL:', user?.picture); // Debugging

    return (
        <View style={styles.Container}>
            <View >

                <Image
                    source={{ uri: user.imageUrl }}
                    style={styles.profileImage}
                />
            </View>
            <View>


                <Text style={styles.userName}>{user.fullName}</Text>
                <Text style={styles.userEmail}>{user.primaryEmailAddress.emailAddress}</Text>



            </View>
            <TouchableOpacity style={styles.button} onPress={() => signOut()}>
                <Text style={styles.buttonText}>Log Out</Text>
            </TouchableOpacity>

          


        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        flexDirection: 'colum',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
      


    },
    greetingText: {
        fontSize: 15,
        color: '#333',
        color: "#000",
        alignItems: 'center',
    },
    userName: {
        paddingTop: 20,
        fontSize: 25,
        fontWeight: 'bold',
        color: "#000",
        alignItems: 'center',
    },

    userEmail: {
        paddingTop: 20,
        fontSize: 14,     
        color: "#000",
        alignItems: 'center',
        
    },

    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 100,
       paddingTop:-50,

    },
    mainText: {
        color: '#fff',
        fontSize: 15,
        fontFamily: 'outfit'
    },
    rowStyle: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
    },

    button: {
        marginTop: 20,
        backgroundColor: '#32CD32',
        padding: 10,
        margin: 30,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },



});
