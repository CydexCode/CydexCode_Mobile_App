import { View, Text } from 'react-native'
import React from 'react'
import { AuthContext } from '../Context/AuthContext'

export default function Home() {
    const {userData,setUserData}=useContext(AuthContext)
    return (
        <View>
            <Button title="Logout" onPress={() => {Services.Logout();setUserData(null)}} />
        </View>
    )
}