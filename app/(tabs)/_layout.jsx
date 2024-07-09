import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import {Ionicons} from '@expo/vector-icons'

import { MaterialIcons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
  <Tabs screenOptions={{
    headerShown:false
  }}>
    <Tabs.Screen 
    name="Home"
    options={{
      tabBarLabel:"Home",
      tabBarIcon:({color})=><Ionicons name="home" size={24} color={color}/>
    }}
    
    />
    <Tabs.Screen name="MyCourse"  
    options={{
      tabBarLabel:"MyCourse",
      tabBarIcon:({color})=><MaterialIcons name="library-books" size={24} color={color}/>
    }}
    
    />

    <Tabs.Screen name="LeaderBoard"
    options={{
      tabBarLabel:"LeaderBoard",
      tabBarIcon:({color})=><MaterialIcons name="leaderboard" size={24} color={color}/>
    }}
    
    />
    <Tabs.Screen name="ProfileScreen"
    options={{
      tabBarLabel:"ProfileScreen",
      tabBarIcon:({color})=><Ionicons name="people" size={24} color={color}/>
    }}
    
    />


  </Tabs>

  )
}