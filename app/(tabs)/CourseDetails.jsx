import { View, Text, TouchableOpacity, ScrollView, ToastAndroid } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { enrollCourse, getUserEnrolledCourse } from '../Services/Index';
import { useNavigation, useRoute } from '@react-navigation/native';
import DetailSection from '../../Components/CourseDetailScreen/DetailSection';
import ChapterSection from '../../Components/CourseDetailScreen/ChapterSection';
import { useUser } from '@clerk/clerk-expo';
import { CompleteChapterContext } from '../Context/CompleteChapterContext';




export default function CourseDetails() {
  const navigate = useNavigation();
  const params = useRoute().params;
  const {isChapterComplete,setIsChapterComplete}=useContext(CompleteChapterContext)

  const [userEnrolledCourse, setUserEnrolledCourse] = useState([]);
  const { user } = useUser();


  useEffect(() => {
    if (user && params.course) {
      GetUserEnrolledCourse();
    }
  }, [params.course, user])

  
  useEffect(()=>{
    isChapterComplete&&GetUserEnrolledCourse();
  },[isChapterComplete])

  const UserEnrollCourse = () => {
    enrollCourse(params.course.id, user.primaryEmailAddress.emailAddress)

      .then(resp => {
        // console.log("---",resp);
        if (resp) {
          ToastAndroid.show('Course Enrolled successfully!', ToastAndroid.LONG);
          GetUserEnrolledCourse();
        }
      })
  }

  const GetUserEnrolledCourse = () => {
    getUserEnrolledCourse(params.course.id, user.primaryEmailAddress.emailAddress)
      .then(resp => {
        //console.log("--",resp.userEnrolledCourses);
        setUserEnrolledCourse(resp.userEnrolledCourses)
      })
  }

  return params.course && (
    <ScrollView style={{ padding: 10 , paddingTop:60}} >
      <TouchableOpacity onPress={() => navigate.goBack()}>
        <Ionicons name="arrow-back-circle-sharp" size={30} color="black" />
      </TouchableOpacity>
      <DetailSection course={params.course} userEnrolledCourse={userEnrolledCourse} enrollCourse={() => UserEnrollCourse()} />
      <ChapterSection chapterList={params.course.chapters}  userEnrolledCourse={userEnrolledCourse}/>

    </ScrollView>
  )
}