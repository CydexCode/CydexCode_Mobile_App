import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { useUser } from "@clerk/clerk-expo";
import Coin from '../../assets/images/coin.png'
import Colors from '../../Shared/Colors';


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
                <Text style={styles.userName}>{user.fullName}</Text>
               
            </View>
            <View >
          
            <Image
                source={{ uri: user.imageUrl }}
                style={styles.profileImage}
            />
           </View>
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
        paddingTop: 40,


    },
    greetingText: {
        fontSize: 15,
        color: '#333',
        color: '#fff',
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        color: '#fff',
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 100,
        marginLeft: 10,
    },
    mainText:{
        color:'#fff',
        fontSize:15,
        fontFamily:'outfit'
    },
    rowStyle:{
        display:'flex',
        flexDirection:'row',
        gap:10,
        alignItems:'center'
    }
});
