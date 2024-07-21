import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../../Colors/Colors'
import { useUser } from '@clerk/clerk-expo';
import { useNavigation } from '@react-navigation/native';
import { GetAllProgressCourse } from '../../app/Services/Index';
import CourseProgressItem from '../MyCourse/CourseProgressItem';


export default function MyCourseCopy() {
    const {user}=useUser();
    const navigation=useNavigation();
    const [progressCourseList,setProgressCourseList]=useState();
    useEffect(()=>{
        user&&GetAllProgressCourseList()
    },[user])
    const GetAllProgressCourseList=()=>{
      GetAllProgressCourse(user.primaryEmailAddress.emailAddress)
      .then(resp=>{
        setProgressCourseList(resp.userEnrolledCourses)
      })
  }
  return (
    <ScrollView>
       <View style={{height:180,backgroundColor:'#32CD32',
    padding:30,}}>
    <Text style={{fontFamily:'outfit-bold',paddingTop:40,
  color:Colors.WHITE,
  fontSize:30}}>My Course</Text>
    </View>
    <FlatList
                data={progressCourseList}
                style={{marginTop:-50}}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity
                    style={{margin:8,padding:5}}
                    onPress={()=>navigation.navigate('CourseDetails',{
                        course:item.course
                    })}
                    >
                        <CourseProgressItem item={item.course}
                        completedChapter={item?.completedChapter?.length}
                        />
                    </TouchableOpacity>

                )}
            />
    </ScrollView>
  )
}