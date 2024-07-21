import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'

import React, { useEffect, useState } from 'react'
import { getCourseList } from '../../app/Services/Index'
import SubHeading from '../SubHeading';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import CourseItem from './CourseItem';
import { useNavigation } from '@react-navigation/native';
import Colors from '@/Shared/Colors';

export default function CourseList({ level }) {
    const navigation=useNavigation();
    const [courseList, setCourseList] = useState([]);

    useEffect(() => {
        getCourse();
    }, [])

    const getCourse = () => {
        getCourseList(level).then(resp => {
         //   console.log("RESP__", resp);
            setCourseList(resp?.courses)


        })
    }
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    return (
        <View style={{ height: 230, }}>
            <SubHeading text={capitalizeFirstLetter(level) + ' Courses'} color={level=='Basic'&&Colors.WHITE} ></SubHeading>
            <FlatList
                data={courseList}
                key={courseList.id}

                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity 
                    onPress={()=>navigation.navigate('CourseDetails',{
                        course:item
                    })}>
                        <CourseItem item={item} />
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}