import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Colors from '../../Colors/Colors';
import { useClerk } from "@clerk/clerk-expo";
import WelcomeHeaderProfile from '../../Components/HomeScreen/WelcomeHeaderProfile';
import About from '../../Components/HomeScreen/About';

export default function ProfileScreen() {
  const { signOut } = useClerk();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}></Text>
        <WelcomeHeaderProfile />
      </View>

      <View style={styles.content}>
        <About />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure the container takes up the full screen height

  },
  header: {
    height: 120,
    backgroundColor: Colors.PRIMARY2,
    padding: 30,
  },
  headerText: {
    fontFamily: 'outfit-bold',
    paddingTop: 40,
    color: Colors.WHITE,
    fontSize: 30,
  },
  content: {
    flex: 1, // Allows the content view to take up remaining space
    paddingTop: 350,
    paddingHorizontal: 30, // Ensure content has horizontal padding
  },
});
