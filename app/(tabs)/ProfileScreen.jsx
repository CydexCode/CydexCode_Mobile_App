import React from 'react';
import Colors from '../../Colors/Colors';
import WelcomeHeaderProfile from '../../Components/HomeScreen/WelcomeHeaderProfile';
import About from '../../Components/HomeScreen/About';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import { useClerk, useUser } from "@clerk/clerk-expo";

export default function ProfileScreen() {

  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }
  const { signOut } = useClerk();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{
          fontFamily: 'outfit-bold', paddingTop: 20,
          color: Colors.WHITE,
          fontSize: 30
        }}>Profile</Text>
        <Text style={styles.headerText}></Text>
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
          {/* <TouchableOpacity style={styles.button} onPress={() => signOut()}>
                        <Text style={styles.buttonText}>Log Out</Text>
                    </TouchableOpacity> */}
        </View>

      </View>

      {/* Action List */}
      <View style={styles.actionList}>
        <TouchableOpacity style={styles.actionItem}>
          <Feather name="book-open" size={24} color="blue" />
          <Text style={styles.actionText}>My Course</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionItem}>
          <MaterialCommunityIcons name="shield-check-outline" size={24} color="blue" />
          <Text style={styles.actionText}>Upgrade Plan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionItem}>
          <Feather name="bar-chart" size={24} color="blue" />
          <Text style={styles.actionText}>Theme</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionItem} onPress={signOut}>
          <SimpleLineIcons name="logout" size={24} color="blue" />
          <Text style={styles.actionText}>Logout</Text>
        </TouchableOpacity>
      </View>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure the container takes up the full screen height

  },
  header: {
    height: 150,
    backgroundColor: Colors.PRIMARY2,
    padding: 30,


  },

  Container: {
    display: 'flex',
    flexDirection: 'colum',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: -90,
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

  actionList: {
    marginTop: 220,
    flex: 1, // Ensures the container takes up all available space
    marginLeft: 50,
    marginRight: 50
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.LIGHTGRAY,

  },
  actionText: {
    fontSize: 16,
    marginLeft: 10,
    color: Colors.TEXT,
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
    textAlign: 'center',
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 100,
    marginTop: -90, // Moves the profile picture 40px upward
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