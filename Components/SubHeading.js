import { View, Text } from 'react-native'
import React from 'react'
import Colors from '../Shared/Colors'

export default function SubHeading({ text, color = Colors.BLACK }) {
    return (
        <View>
            <Text style={{
                
                fontSize: 20,
                color: color,
            }}>{text}</Text>
        </View>
    )
}