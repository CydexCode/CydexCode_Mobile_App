import { View, Text, TouchableOpacity, ScrollView, ToastAndroid } from 'react-native'
import React, { useEffect } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

import { useNavigation, useRoute } from '@react-navigation/native';
import DetailSection from '../../Components/CourseDetailScreen/DetailSection';
import ChapterSection from '../../Components/CourseDetailScreen/ChapterSection';




export default function CourseDetails() {
  const navigate=useNavigation();
  const params=useRoute().params;

  useEffect(()=>{
    console.log(params.course)

  },[params.course])

  return params.course&&(
    <ScrollView style={{padding:30}} >
      <TouchableOpacity onPress={()=>navigate.goBack()}>
      <Ionicons name="arrow-back-circle-sharp" size={30} color="black" />
      </TouchableOpacity>
      <DetailSection course={params.course}/>
      <ChapterSection chapterList={params.course.chapters} />
     
    </ScrollView>
  )
}