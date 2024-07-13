import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getCourseList } from '../../app/Services/Index'
import SubHeading from '../SubHeading';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


export default function CourseItem({item}) {
  return (
    <View style={{
        padding: 10,
        backgroundColor: 'white',
        marginRight: 15,
        borderRadius: 15
    }}>
        <Image source={{ uri: item?.banner?.url }}
            style={{ width: 210, height: 120, borderRadius: 15 }} />
        <View style={{ padding: 3 }}>
            <Text style={{
                fontSize: 15,
            }}>{item.name}</Text>
            </View>

            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between', fontSize: 10,}}>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10,
                    fontSize: 10,
                    padding: 3
                }}>
                    <Feather name="book-open" size={15} color="black" />
                    <Text style={{
                fontSize: 10,
            }}>{item?.chapters?.length} Chapters</Text>
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10,
                    fontSize: 10,
                    padding: 3
                }}>
                    <Ionicons name="time-outline" size={15} color="black" />
                    <Text style={{
                fontSize: 10,
            }} >{item?.time} Hr</Text>
                </View>
              
        </View>
        <Text style={{padding: 3,
             fontSize: 10,
        }}>Cost : {item.free==0?'Free':item.price} $</Text>
    </View>
  )
}