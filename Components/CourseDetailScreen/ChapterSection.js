import { View, Text, StyleSheet ,TouchableOpacity, ToastAndroid } from 'react-native'
import React from 'react';
import Colors from '../../Colors/Colors.js'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';


export default function ChapterSection({ chapterList, userEnrolledCourse }) {

    const navigation=useNavigation();
    const OnChapterPress=(content)=>{
        if(userEnrolledCourse.length==0)
        {
          ToastAndroid.show('Please Enroll Course!',ToastAndroid.LONG)
          return ;
        }
        else{
           
            navigation.navigate('ChapterContentScreen',{
              content:content
             
            })
          }
      }

    return chapterList && (
        <View style={{
            padding: 10,
            backgroundColor: Colors.WHITE, marginTop: 20,
            borderRadius: 15, marginBottom: 27
        }}>
            <Text style={{
                fontFamily: 'outfit-medium',
                fontSize: 22
            }}>Chapters</Text>
            {chapterList.map((item, index) => (
                <TouchableOpacity style={{
                    display: 'flex', flexDirection: 'row',
                    alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, padding: 15, borderRadius: 10, marginTop: 10, borderColor: Colors.GRAY
                }} 
                onPress={()=>OnChapterPress(item.content)}>
                    <View style={{
                        display: 'flex', flexDirection: 'row',
                        alignItems: 'center', gap: 10
                    }}>
                        <Text style={{
                            fontFamily: 'outfit-medium',
                            fontSize: 27, color: Colors.GRAY
                        }}>{index + 1}</Text>
                        <Text style={{
                            fontFamily: 'outfit',
                            fontSize: 21, color: Colors.GRAY
                        }}>{item.title}</Text>
                    </View>

                    {userEnrolledCourse.length == 0 ?
                        <Ionicons name="lock-closed" size={25} color={Colors.GRAY} />
                        :
                        <Ionicons name="play" size={25} color={Colors.GRAY} />
                    }
                </TouchableOpacity >

            ))}


        </View>
    )
}

