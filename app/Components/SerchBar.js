import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../Shared/Colors';

export default function SerchBar() {
    return (
        <View style={styles.Container}>
            <MaterialCommunityIcons name="note-search-outline" size={24} color={Colors.gray} style={{ marginRight: 10 }} />
            <TextInput placeholder='Search Tutorials' />
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop: 10,

    }



})