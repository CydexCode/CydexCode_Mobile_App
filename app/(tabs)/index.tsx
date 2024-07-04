import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import Login from '../Pages/Login.js';

export default function HomeScreen() {
  return (
    <View>
      <Login />
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
