import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import Login from '../Pages/Login.js';
import Home from '../Pages/Home.js';
import { useState, useEffect } from 'react'
import { AuthContext } from '../Context/AuthContext.js';
import Services from '../Shared/Services.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function HomeScreen() {

  const [userData, setUserData] = useState();
  useEffect(() => {
    Services.getUserAuth().then(resp=>{
      console.log(resp);
      if(resp)
      {
        setUserData(resp)
      }else{
        
      }
    })
  }, [])


  return (
    <View>
      <AuthContext.Provider
        value={{ userData, setUserData }}>
        {userData ? <Home /> : <Login />}
      </AuthContext.Provider>

    </View>

      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0, // Adjust for Android status bar
  },
});
